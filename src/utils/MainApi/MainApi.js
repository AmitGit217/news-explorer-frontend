class UserActions {
    constructor({ url, headers }) {
        this.url = url;
        this.headers = headers;
    }

    async _connect(url, headers) {
        const res = await fetch(url, headers);
        if (res) {
            return res.json();
        }
        return await Promise.reject(`Error: ${res.status}`);
    }

    signup(values) {
        return this._connect(`${this.url}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(values),
        });
    }

    signin(values) {
        return this._connect(`${this.url}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
    }

    checkToken(token) {
        return this._connect(`${this.url}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

const userActionsApi = new UserActions({
    url: "https://news-api.eastus.cloudapp.azure.com",
    headers: { "Content-Type": "application/json" },
});

export default userActionsApi;
