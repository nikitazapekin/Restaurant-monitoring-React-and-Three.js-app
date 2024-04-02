
import ReactDom from 'react-dom';
//import GetTableInfo from '../../hooks/getTableInfo';
import { OverlayStyles, ErrorTime, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage, ModalTitle, HeaderWrapper, ModalData, GridWrapper, GridTable, GridTableElement, SelectDataTitle, SelectBookingTimeBlock, SelectBookingTimeBlockFrom, SelectingBookingTimeBlockFromTitle, SelectingBookingTime, BookedTime, BookedTimeItem, BookingTimeItemBackground, BookingTimeItemContent, BookingTimeItemContentText, SelectTimeTitle, SelectDataContainer, SelectDataOption, SelectForAllDayTable, ModalSubTitle } from './restoreModalStyles';
export default function RestoreModalWindow({ open, onClose}) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  //const { handleBook, handleTime, oneUser, isError, currentDate, errorMessage, handleBookTableForDay, time, isConfirm } = GetTableInfo({ clickedElement, onClose, month, year, clickedDay })
  return ReactDom.createPortal(
    <>

    
        <>
          <Modal open={open} width="90">
            <ModalWrapper>
                {/*
              <HeaderWrapper>
                  <ModalTitle>
                  Table № {clickedElement}   {clickedDay}-{month + 1}-{year}
                </ModalTitle>
                <ModalData>
                  {currentDate}
                </ModalData>
              </HeaderWrapper>
              <SelectDataTitle>
                Select data for booking
              </SelectDataTitle>
              <SelectDataContainer>
                <SelectTimeTitle>
                  Select time booking
                </SelectTimeTitle>
              </SelectDataContainer>
              <SelectBookingTimeBlock>
                <SelectBookingTimeBlockFrom>
                  <SelectingBookingTimeBlockFromTitle> From</SelectingBookingTimeBlockFromTitle>
                  <SelectingBookingTime value={time.from} onChange={(event) => handleTime(event)} name="from" placeholder='From 00:00' />
                </SelectBookingTimeBlockFrom>
                <SelectBookingTimeBlockFrom>
                  <SelectingBookingTimeBlockFromTitle> To</SelectingBookingTimeBlockFromTitle>
                  <SelectingBookingTime value={time.to} onChange={(event) => handleTime(event)} name="to" placeholder='To 00:00' />
                </SelectBookingTimeBlockFrom>
              </SelectBookingTimeBlock>
              <SelectForAllDayTable
                onClick={handleBookTableForDay}
              >Or book for all day this table</SelectForAllDayTable>
              {errorMessage && (
                <ErrorTime>
                  {errorMessage}
                </ErrorTime>
              )}
              <SelectDataTitle>
                Reserved seats for {clickedDay}-{month}-{year}
              </SelectDataTitle>
              <BookedTime>
                {oneUser && oneUser.getTableInfo != undefined && (
                  <>
                    {oneUser.getTableInfo.timeForBooking.map((item => (
                      <BookedTimeItem>
                        <BookingTimeItemContent>
                          <BookingTimeItemContentText>
                            {item.from}-{item.to}
                          </BookingTimeItemContentText>
                        </BookingTimeItemContent>
                        <BookingTimeItemBackground />
                      </BookedTimeItem>
                    )))}
                  </>
                )}
              </BookedTime>
              <ModalButton
                onClick={handleBook}
              >
                Submit
              </ModalButton>
                    */}


            </ModalWrapper>
          </Modal>

        </>)  

  
      <OverlayStyles onClick={() => onClose()} />
    </>,
    portalElement || document.body
  );
}  
