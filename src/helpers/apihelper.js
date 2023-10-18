const fetchAuthorName = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userData = await response.json();
    return userData.name;
  } catch (error) {
    console.error("Error fetching author name:", error);
    return "Author Name Not Found";
  }
};
export default fetchAuthorName;
