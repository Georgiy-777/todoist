// import React from 'react';
// interface IInput {
//   value?: string;
//   onChange?: (e: any) => void;
//   type?: string;
//   placeholder?: string
// }
// const Input: React.FC<IInput> = ({type, value, onChange, placeholder}) => {
//   return (
//     <div>
//           <input
//           placeholder={placeholder}
//             type={type}
//             value={value}
//             onChange={onChange}
//             className="bg-gray-100 border-1 p-2 border-pink-500 rounded-lg w-full"
//           />
//     </div>
//   );
// };

// export default Input;


import React, { forwardRef } from 'react';

interface IInput {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type = 'text', value, onChange, placeholder, name, error, ...rest }, ref) => {
    return (
      <div>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          ref={ref}
          className={`bg-gray-100 border-1 p-2 rounded-lg w-full ${error ? 'border-red-500' : 'border-pink-500'} text-slate-800`}
          {...rest}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
