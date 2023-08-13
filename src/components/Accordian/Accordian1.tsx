import { useState } from 'react'
import { AccordianTypeWithoutsetShow, Accordian_Props } from '../../types/accordian'

export default function Accordian1({ questions }: Accordian_Props) {
  const [check, setCheck] = useState<boolean>(false)
  const [lastChangesIndex, setLastChangesIndex] = useState<number>(-1)

  const [allShowValue, setAllShowValue] = useState<boolean[]>(questions.map((e: AccordianTypeWithoutsetShow) => false))

  function setShowHandler(index: number) {
    let newVal: typeof allShowValue = [...allShowValue]
    if (check) newVal = [...questions.map((e: AccordianTypeWithoutsetShow) => false)]
    newVal[index] = !allShowValue[index]
    setAllShowValue(newVal)
    setLastChangesIndex(index)
    // Do not use this way, it will render two times, Do not why?? **************************
    // setAllShowValue((arrVal) => {
    //   console.log('inside setShowHandler',arrVal[index],arrVal)
    //   arrVal[index] = !arrVal[index]
    //   console.log('inside setShowHandler1',arrVal[index],arrVal)
    //   return [...arrVal]
    // })
  }

  function setCheckHandler(e: any) {
    setCheck(e.target.checked)
    const newVal: typeof allShowValue = [...questions.map((e: AccordianTypeWithoutsetShow) => false)]
    const allClosed=allShowValue.reduce((acc,val)=>acc||val,false)
    if(!allClosed){
      newVal[lastChangesIndex] = true
    }
    setAllShowValue(newVal)
  }

  return (
    <div style={{
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      gap: '20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <span>Is multiple open accordion allowed?</span>
        <input
          type='checkbox'
          value="checked"
          checked={check}
          onChange={setCheckHandler} />
      </div>
      {questions?.map((accordianProp: AccordianTypeWithoutsetShow, index: number) => <div style={{
        display: "flex",
        flexDirection: "column",
        border: '1px solid black',
        marginLeft: '60px',
        marginRight: '60px',
        padding:'15px',
        borderRadius:'2px',
        textAlign: 'left',
        fontSize: '14px'
      }}>
        <div style={{ 
          // border: '1px solid red',
          // borderRadius:'30px',
          display: "flex",
          flexDirection: 'row',
          justifyContent:'space-between' }}>
          <h3>
            {accordianProp.title}
          </h3>
          <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            width: '2rem',
            minWidth: '2rem',
            height: '2rem',
            marginLeft: '1rem',
            fontSize: '20px',
            color: '#fff',
            cursor: 'pointer',
            background: 'rgb(209 209 209)',
            borderColor: 'transparent',
            borderRadius: '50%'
          }}
          onClick={() => setShowHandler(index)}
          >{allShowValue[index]?'-':'+ '}</button>
        </div>
        {allShowValue[index] && <p>{accordianProp.info}</p>}
        <div></div>
      </div>)}
    </div>
  )
}