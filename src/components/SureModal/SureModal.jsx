
import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import { OverlayStyles, Modal, ModalWrapper, AgreeButton, DisagreeButton, ButtonBlock } from './SureModalStyles';
import Calendar from '../calendar/calendar';
import useCalendar from '../../hooks/useCalendar';
import GetTablesInfo from '../../hooks/getTablesInfo';
import { useEffect } from 'react';
import useSureModal from '../../hooks/useSureModal';
import { useState } from 'react';
import { ModalTitle } from '../Modal/ModalStyles';
export default function SureModalWindow({ isOpen, setIsOpen, item }) {
  console.log("ITEEEEEEEM" + JSON.stringify(item))

  const [isSuccess, setIsSuccess] = useState(false)
  if (!isOpen) return null
  const portalElement = document.getElementById('sure')
  const handleClick = () => {
    setIsOpen(false)
    setIsSuccess(false)

  }
  const handleAgree = () => {
    setIsSuccess(true)
  }
  return ReactDom.createPortal(

    <>
      {!isSuccess ? (
        <>

          <Modal //open={open}
          >
            <ModalWrapper>
              <ModalTitle>
                Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} ({item.current.dataOfBooking})?
              </ModalTitle>
              <ButtonBlock>
                <AgreeButton
                  onClick={handleAgree}
                >
                  Yes I agree!
                </AgreeButton>
                <DisagreeButton onClick={handleClick}>
                  No I disagree!
                </DisagreeButton>
              </ButtonBlock>
            </ModalWrapper>
          </Modal>
          <OverlayStyles
          />
        </>
      ) : (
        <>
          <Modal //open={open}
          >
            <ModalWrapper>
              <ModalTitle>
                Contragulation! You have successfully booked this table!
              </ModalTitle>

              <AgreeButton
                onClick={handleClick}
              >
                Submit
              </AgreeButton>

            </ModalWrapper>
          </Modal>
          <OverlayStyles />
        </>
      )}
    </>,
    portalElement || document.body
  );
}  
