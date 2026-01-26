const TOKEN_KEY = 'access_token';
const AGENT_KEY = 'agent_data';

const setAccessToken = (token) => {
  if (typeof window === "undefined") return;
  try {
    if (token !== null) {
      localStorage.setItem(TOKEN_KEY, token);
      ('Access token stored successfully');
    } else {
      localStorage.removeItem(TOKEN_KEY);
      console.warn('Attempted to store a null token');
    }
  } catch (e) {
    console.error('Error storing access token:', e);
  }
};

const getAccessToken = () => {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(TOKEN_KEY); // Return the token
  } catch (e) {
    console.error('Error retrieving access token:', e);
    return null;
  }
};


const setAgentData = (agent) => {
  if (typeof window === "undefined") return;
  try {
    if (agent !== null) {
      localStorage.setItem(AGENT_KEY, JSON.stringify(agent));
      ('Agent data stored successfully');
    } else {
      localStorage.removeItem(AGENT_KEY);
      console.warn('Attempted to store null agent data');
    }
  } catch (e) {
    console.error('Error storing agent data:', e);
  }
};

const getAgentData = () => {
  if (typeof window === "undefined") return null;
  try {
    const agentData = localStorage.getItem(AGENT_KEY);
    return agentData ? JSON.parse(agentData) : null;
  } catch (e) {
    console.error('Error retrieving agent data:', e);
    return null;
  }
};

const removeAccessToken = () => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(TOKEN_KEY);
    ('Access token removed successfully');
  } catch (e) {
    console.error('Error removing access token:', e);
  }
};

const removeAgentData = () => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AGENT_KEY);
    ('Agent data removed successfully');
  } catch (e) {
    console.error('Error removing agent data:', e);
  }
};

export {
  setAccessToken,
  getAccessToken,
  setAgentData,
  getAgentData,
  removeAccessToken,
  removeAgentData
};
