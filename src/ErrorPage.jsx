import { useRouteError } from "react-router-dom"
export default function ErrorPage(){

  const error = useRouteError();
  console.error(error)

  return(
    <div className="Wrapper-Error-page">
      <h1 id="Error-Header">Error!</h1>
      <p>Sorry, an unexpected error has been encountered</p>
      <p>
        <i id="errorTag">{error.statusText || error.message}</i>
      </p>
    </div>
  )


  
}