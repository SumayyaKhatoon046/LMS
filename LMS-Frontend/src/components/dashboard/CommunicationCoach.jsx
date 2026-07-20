

const CommunicationCoach=()=>{

return(

<div className="bg-slate-900 p-6 rounded-3xl">

<h2 className="text-white text-2xl font-bold">

Communication Coach

</h2>

<textarea

className="w-full mt-5 p-4 rounded-xl"

rows="6"

placeholder="Explain your code..."

></textarea>

<button

className="mt-5 px-6 py-3 bg-cyan-600 rounded-xl text-white"

>

Evaluate

</button>

</div>

);

};

export default CommunicationCoach;