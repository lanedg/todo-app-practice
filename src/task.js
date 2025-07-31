class Task {
  constructor(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  switchTaskCompletionStatus() {
    if (this.completed === false) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }

  getCompletionStatus() {
    return this.completed;
  }
}
