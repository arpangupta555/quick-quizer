import React from 'react';

const Blog = () => {



    return (
        <div>
            <div class="shadow-lg mt-5">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">What are the purpose of react router?</div>
                    <p class="text-gray-700 text-base">
                        React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                        By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                    </p>
                </div>

            </div>

            <div class="shadow-lg ">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">How does context API works?</div>
                    <p class="text-gray-700 text-base">
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </p>
                </div>

            </div>

            <div class="shadow-lg ">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">What is useref in react?
                    </div>
                    <p class="text-gray-700 text-base">
                        The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                    </p>
                </div>

            </div>





        </div>

    );
};

export default Blog;