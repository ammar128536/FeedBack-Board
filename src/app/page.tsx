// app/page.tsx
import { getFeedbacks, type Feedback } from '../lib/db'


export default async function Home() {
  const feedbacks = await getFeedbacks()

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📝 Feedback Board</h1>

      <div className="mb-6 text-center">
        <a href="/submit" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          + Leave Feedback
        </a>
      </div>

      <section className="space-y-4">
        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-500">No feedback yet. Be the first to submit!</p>
        ) : (
          feedbacks.map((feedback) => (
            <div key={feedback.id} className="p-4 border rounded shadow-sm flex items-start gap-4 bg-white">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                {feedback.name[0].toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-gray-800">{feedback.name}</h2>
                  <time className="text-sm text-gray-400">{new Date(feedback.createdAt).toLocaleString()}</time>
                </div>
                <p className="mt-2 text-gray-700">{feedback.message}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  )
}
