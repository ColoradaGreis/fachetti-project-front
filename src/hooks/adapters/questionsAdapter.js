
export default function questionsAdapter (questions) {
  if (Array.isArray(questions) && questions.length === 0) return []
  return questions.map(question => {
    return {
      id: question.id,
      name: question.name,
      email: question.email,
      message: question.message,
      isRead: question.isRead,
      isAnswered: question.isAnswered,
      date: question.date,
      phone: question.phone
    }
  })
}
