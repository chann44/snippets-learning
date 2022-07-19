import TransectionBar from "./TransectionBar";
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const Transections = () => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto backdrop-blur-sm fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="max-h-[800px] overflow-auto no-scrollbar relative w-auto my-6 mx-auto max-w-6xl ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-black p-5">
                        {/*header*/}
                        <div>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setModal(false)}
                            >
                                <AiOutlineClose className='text-3xl text-black' />

                            </button>
                        </div>
                        <div className="flex items-start justify-between rounded-t mt-5 sticky top-0 z-40 bg-white p-4 border-b border-b-gray-200">
                            <h3 className="text-3xl font-semibold">
                                Transections
                            </h3>
                            <select name="transection" id="transection">
                                <option value="all_transection">All Transection</option>
                                <option value="pending_transection">Pending Transection</option>
                                <option value="successfull transection">Successfull Transection</option>
                            </select>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto min-h-[600px] space-y-8">
                            <TransectionBar />
                            <TransectionBar />
                            <TransectionBar />
                            <TransectionBar />
                            <TransectionBar />
                            <TransectionBar />
                            <TransectionBar />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}

export default Transections;
