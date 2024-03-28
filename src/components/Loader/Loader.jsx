import { Hourglass } from "react-loader-spinner"


const Loader = () => {
  return (
    <div>
          <Hourglass
            visible={true}
            height="50"
            width="50"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
  )
}

export default Loader