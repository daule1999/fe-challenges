export type AccordianType = {
    id:number
    title: string
    info: string,
    show?: boolean,
    setShow: (index: number) => void,
    index?: number
}

export type AccordianTypeWithoutsetShow = Omit<AccordianType, 'setShow'>

export type Accordian_Props = {
    questions: AccordianTypeWithoutsetShow[]
}