export const fakeAuth = {
  isAuthenticated: false,
  login(user: { name: string; email: string }) {
    fakeAuth.isAuthenticated = true;
    return Promise.resolve({ id: Date.now().toString(), ...user });
  },
  logout() {
    fakeAuth.isAuthenticated = false;
    return Promise.resolve();
  },
};
