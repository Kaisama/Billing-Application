export const Button=({val,fn,disable=false})=>{
    return(<button disabled={disable} onClick={fn} className="btn btn-primary me-2" >{val}</button>)
}