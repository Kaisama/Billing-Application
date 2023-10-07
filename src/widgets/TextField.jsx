export const TextField=({lbl,inputRef,val})=>{
    if(val){
    inputRef.current.value=val;
    }
    const placeHolder=`Type ${lbl}`;
return(
    <div>
        <label>{lbl}</label>
        <input ref={inputRef} className="form-control" type='text' placeholder={placeHolder} />
    </div>
)
}