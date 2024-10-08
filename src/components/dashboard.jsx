
function Dashboard({ tasks }) {
    console.log(tasks)
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    const totalTasks = tasks.length;

    console.log("completeTasks: ", completedTasks)
    console.log("totalTasks: ", totalTasks)

    return (
    <div className="w-full max-w-4xl mx-auto p-4 mt-14">
        <section className="w-full text-white rounded-md">
            <div className="flex flex-col md:flex-row justify-between items-center border-2 border-gray-400 rounded-md p-4 mb-4">
                <div className="text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-semibold">Task Done</p>
                    <p className="text-lg md:text-xl text-gray-400">Keep it up!</p>
                </div>
                <div className="flex items-center justify-center w-24 h-24 md:w-16 md:h-16 bg-green-600 rounded-full text-2xl md:text-xl">
                    {completedTasks}/{totalTasks}
                </div>
            </div>
        </section>
    </div>
);

}

export default Dashboard;
