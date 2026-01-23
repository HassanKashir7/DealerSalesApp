/**
 * API Service
 * Centralized API client configuration and request handling
 * All API calls should go through this service
 */

export interface ApiConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

class ApiService {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      timeout: 10000,
      ...config,
    };
  }

  /**
   * Update API configuration
   */
  updateConfig(config: Partial<ApiConfig>) {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get default headers
   */
  private getHeaders(customHeaders?: Record<string, string>): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.config.headers,
      ...customHeaders,
    };

    // Add auth token if available
    // const token = getAuthToken();
    // if (token) {
    //   headers.Authorization = `Bearer ${token}`;
    // }

    return headers;
  }

  /**
   * Make a GET request
   */
  async get<T = any>(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'GET',
      headers: this.getHeaders(headers),
    });
  }

  /**
   * Make a POST request
   */
  async post<T = any>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      headers: this.getHeaders(headers),
      body: JSON.stringify(data),
    });
  }

  /**
   * Make a PUT request
   */
  async put<T = any>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      headers: this.getHeaders(headers),
      body: JSON.stringify(data),
    });
  }

  /**
   * Make a DELETE request
   */
  async delete<T = any>(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      headers: this.getHeaders(headers),
    });
  }

  /**
   * Core request method
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = `${this.config.baseURL}${endpoint}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const error: ApiError = {
          message: data.message || `HTTP ${response.status}`,
          status: response.status,
          data,
        };
        throw error;
      }

      return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw {
          message: 'Request timeout',
          status: 408,
        } as ApiError;
      }

      throw {
        message: error.message || 'Network error',
        status: error.status,
        data: error.data,
      } as ApiError;
    }
  }
}

// Create and export a singleton instance
// Base URL should come from environment variables in production
export const api = new ApiService({
  baseURL: process.env.API_BASE_URL || 'https://api.example.com',
});

