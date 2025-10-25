import Book from "../model/book.modal.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // ✅ await the async call
    res.status(200).json(books);     // ✅ return the result
  } catch (error) {
    console.log("Error fetching books:", error);
    res.status(500).json({ message: "Error fetching books" });
  }
};
