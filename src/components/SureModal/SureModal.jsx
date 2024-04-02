
import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import { OverlayStyles, Modal, ModalWrapper, AgreeButton, DisagreeButton, ButtonBlock } from './SureModalStyles';
import { useMutation, useQuery } from "@apollo/client";
import Calendar from '../calendar/calendar';
import useCalendar from '../../hooks/useCalendar';
import GetTablesInfo from '../../hooks/getTablesInfo';
import { useEffect } from 'react';

import { useState } from 'react';
import { ModalTitle } from '../Modal/ModalStyles';
import { useParams } from 'react-router-dom';
export default function SureModalWindow({ isOpen, setIsOpen, item, handleConfirm }) {
  const [isSuccess, setIsSuccess] = useState(false)
  const { id } = useParams()
  if (!isOpen) return null
  const portalElement = document.getElementById('sure')
  const handleClick = () => {
    setIsOpen(false)
    setIsSuccess(false)

  }
  const handleAgree = () => {
    handleConfirm(item.current)
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
