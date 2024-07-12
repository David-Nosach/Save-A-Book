// Function to get saved book IDs from localStorage
export const getSavedBookIds = () => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : [];

  return savedBookIds;
};

// Function to save book IDs to localStorage
export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem("saved_books", JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem("saved_books");
  }
};

// Function to remove a book ID from localStorage
export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : null;

  if (!savedBookIds) {
    return false;
  }

  // Filter out the book ID to be removed
  const updatedSavedBookIds = savedBookIds?.filter(
    (savedBookId) => savedBookId !== bookId
  );
  localStorage.setItem("saved_books", JSON.stringify(updatedSavedBookIds));

  return true;
};
