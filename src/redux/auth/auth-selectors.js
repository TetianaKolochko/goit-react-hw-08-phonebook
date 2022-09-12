const getIsLoggedIn = state => state.auth.isLoggedIn;
const getLoading = state => state.auth.isLoading;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
};

export default authSelectors;
