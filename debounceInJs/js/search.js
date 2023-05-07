const searchUser = (searchValue, url, list_Id, param) => {
  let filterUser = [];
  const fetchData = async (filterValue) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      filterUser = [...data];
      filterList(filterValue);
    } catch (error) {
      alert("Unable to fetch data");
      console.log(error);
    }
  };
  if (filterUser.length === 0) {
    fetchData(searchValue);
  } else {
    filterList(searchValue);
  }
  const filterList = (currentValue) => {
    const filterObj = filterUser.filter((obj, index) => {
      return currentValue.length > 0
        ? obj[param].toLowerCase().substr(0, currentValue.length) ===
            currentValue.toLowerCase()
        : null;
    });
    generateUiList(filterObj, currentValue);
  };
  const generateUiList = (list, currentValue) => {
    let html = '<ul  class="list-group">';
    list.forEach((obj) => {
      html += '<li  class="list-group-item">';
      html += `<a href="#">${obj.title}</a>`;
      html += "</li>";
    });
    html += "</ul>";
    if (list.length === 0 && currentValue.length === 0) {
      document.getElementById(list_Id).innerHTML = "";
    } else if (list.length === 0) {
      document.getElementById(list_Id).innerHTML = "No user found";
    } else {
      document.getElementById(list_Id).innerHTML = html;
    }
  };
};
