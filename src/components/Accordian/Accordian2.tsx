
import { Accordian_Props } from "../../types/accordian";
import { useEffect, useState } from "react";

const Accordion = ({
    title,
    info,
    id,
    openAccordionId,
    setIdOfOpenAccordion,
}: any) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prev) => !prev);
        setIdOfOpenAccordion(id);
    };

    useEffect(() => {
        if (openAccordionId) {
            setShow(openAccordionId === id);
        }
    }, [id, openAccordionId]);

    return (
        <div key={id} style={{
            padding: '10px',
            marginBottom: '10px',
            fontSize: '14px',
            textAlign: 'left',
            border: '1px solid rgb(218 212 212)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h3>{title}</h3>
                <button onClick={toggle}
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
                >
                    {show ? "-" : "+"}
                </button>
            </div>
            {show && <p>{info}</p>}
        </div>
    );
};


export default function Accordian2({ questions }: Accordian_Props) {
    const [multiple, setMultiple] = useState<boolean>(true);
    const [openAccordionId, setOpenAccordionId] = useState<number>(-1);

    const setIdOfOpenAccordion = (id = -1) => {
        setOpenAccordionId(multiple ? -1 : id);
    };

    const onMultipleChange = () => {
        if (multiple) {
            setOpenAccordionId(-1);
        }
        setMultiple(!multiple);
    };

    return (
        <div style={{
            marginTop: '1rem',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            marginLeft: '5rem',
            marginRight: '5rem',
            padding: '15px',
        }}>
            <h4>
                <label htmlFor="max-open">Is multiple open accordion allowed?</label>
                <input
                    type="checkbox"
                    id="max-open"
                    checked={multiple}
                    onChange={onMultipleChange}
                />
            </h4>

            <div>
                {questions.map((question) => (
                    <Accordion
                        key={question.id}
                        multiple={multiple}
                        openAccordionId={openAccordionId}
                        setIdOfOpenAccordion={setIdOfOpenAccordion}
                        {...question}
                    />
                ))}
            </div>
        </div>
    );
}