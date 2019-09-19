class HTTP {
  handleError(response) {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  }
  async get(url) {
    const response = await fetch(url);
    const res = await this.handleError(response);
    return res;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await this.handleError(response);
    return res;
  }
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res = await this.handleError(response);
    return res;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200) {
      return "delete";
    }
    throw new Error(response.status);
  }
}

export const http = new HTTP();
