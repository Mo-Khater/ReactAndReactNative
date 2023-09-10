import jwtDecode from 'jwt-decode';
function IsTokenExpired() {
    const token = localStorage.getItem('token');
    if (!token) {
      // Token is not present
      return true;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds
      console.log(decodedToken.exp);
      console.log(currentTime);
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
  