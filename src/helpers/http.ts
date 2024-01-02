export const httpPostRequest = async (url: string, payload: any, headers={}): Promise<any> => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(payload),
      });
  
      return response.json();
    } catch (error) {
      console.error("HTTP request error:", error);
      throw error;
    }
  };