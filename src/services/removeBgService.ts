export interface RemoveBgResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export class RemoveBgService {
  private static readonly API_KEY = 'Hz7MKAr34H2hp5aPbCyrzAE5';
  private static readonly API_URL = 'https://api.remove.bg/v1.0/removebg';

  static async removeBackground(imageFile: File): Promise<RemoveBgResponse> {
    try {
      const formData = new FormData();
      formData.append('image_file', imageFile);
      formData.append('size', 'auto');

      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'X-Api-Key': this.API_KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.errors?.[0]?.title || `API error: ${response.status}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      return {
        success: true,
        imageUrl,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to remove background',
      };
    }
  }
}