function IsTokenExpired() {
    function decodeJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
      }
    const token = localStorage.getItem('token');
    if (!token) {
      // Token is not present
      return true;
    }
  
    try {
      const decodedToken = decodeJwt(token);
      const currentTime = Date.now() / 1000; // Convert to seconds
      if(decodedToken.exp < currentTime)
      {
        localStorage.removeItem('token');
        return true;
      }
      else 
      return false;
    } catch (error) {
      // Token is invalid or expired
      return true;
    }
  }
  export default IsTokenExpired;
  