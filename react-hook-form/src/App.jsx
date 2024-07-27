import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000); //d seconds delay
    });
  };

  const onSubmit = async (data) => {
    // await delay(2); //for network delay
    //send post request on below url and store returned response in r
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers:{"content-Type":"application/json"},
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res); //print submitted data after 2 seconds
    // if(data.username!=="shubham"){
    //   setError("myform",{message:"username is incorrect"})
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container" onSubmit={handleSubmit(onSubmit)}>
        <form action="">
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "username required" },
              minLength: { value: 3, message: "minimum length  is 3" },
              maxLength: { value: 8, message: "maximum length  is 8" },
            })}
            type="text"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          &nbsp;
          <input
            placeholder="password"
            {...register("password", {
              required: { value: true, message: "password is required" },
              minLength: { value: 8, message: "minimun length should be 8" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
