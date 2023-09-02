const editcv = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      setcv(dataUrl);
  
      const newobject = { ...object1, cv: dataUrl };
      setobject1(newobject);
    };
  
    reader.readAsDataURL(file);
  };