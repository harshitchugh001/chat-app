import React from 'react'

export default function TaskBorad() {
    return (
        <div className="p-5 border border-gray-300 rounded-md shadow-lg">
        <div className="flex flex-row justify-between items-center bg-gray-200 p-2">
          <h1 className="text-xl font-bold">TaskBoard</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </div>
        <div className="flex flex-row space-x-5 mt-5">
          <div className="flex-1">
            <h2 className="text-lg font-bold">To Do</h2>
            <ul className="max-w-full w-full">
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 1</li>
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 2</li>
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 3</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold">In Progress</h2>
            <ul className="max-w-full w-full">
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 4</li>
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 5</li>
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 6</li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold">Done</h2>
            <ul className="max-w-full w-full">
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 7</li>
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 8</li>
              <li className="bg-white border border-gray-200 rounded p-2 mb-3">Task 9</li>
            </ul>
          </div>
        </div>
      </div>

    )
}
