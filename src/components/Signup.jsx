import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

export default function Signup() {
  const { createAccount } = useContext(ProjectContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAccount(username, email, password);
      console.log("succesfully created account");
      // Redirect or show success message after successful account creation
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Vidsyncro
          </a>
          <div className="w-full bg-gray-800 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
                {error && <p className="text-red-500">{error}</p>}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React, { useState } from "react";
// // import Userpool from "../Userpool";

// export default function Signup() {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   // const onSubmit = (e) => {
//   //   e.preventDefault();
//   //   Userpool.signUp(email, password, [], null, (err, data) => {
//   //     if (err) console.log(err);
//   //     console.log(data);
//   //   });
//   // };

//   return (
//     <div className="w-full">
//       {/* <form onSubmit={onSubmit}>
//         <label htmlFor="email">Email</label>
//         <input value={email} onChange={(e) => setEmail(e.target.value)}></input>

//         <label htmlFor="password">Password</label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>

//         <button type="submit">Sign Up</button>
//       </form> */}
//         <section className="bg-gray-50 dark:bg-gray-900">
//           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//             <a
//               href="#"
//               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//             >
//               <img
//                 className="w-8 h-8 mr-2"
//                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//                 alt="logo"
//               />
//               Vidsyncro
//             </a>
//             <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                   Create an account
//                 </h1>
//                 <form className="space-y-4 md:space-y-6" action="#">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       Your email
//                     </label>
//                     <input
//                       // value={email}
//                       // onChange={(e) => setEmail(e.target.value)}
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="name@company.com"
//                       required=""
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                       Password
//                     </label>
//                     <input
//                       // value={password}
//                       // onChange={(e) => setPassword(e.target.value)}
//                       type="password"
//                       name="password"
//                       id="password"
//                       placeholder="••••••••"
//                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       required=""
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                   >
//                     Create an account
//                   </button>
//                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                     Already have an account?{" "}
//                     <a
//                       href="#"
//                       className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                     >
//                       Login here
//                     </a>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//     </div>
//   );
// }
