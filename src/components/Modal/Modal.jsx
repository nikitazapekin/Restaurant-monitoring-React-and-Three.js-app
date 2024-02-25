
import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import { OverlayStyles, ErrorTime, Modal, ModalWrapper,  ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage, ModalTitle, HeaderWrapper, ModalData, GridWrapper, GridTable, GridTableElement, SelectDataTitle, SelectBookingTimeBlock, SelectBookingTimeBlockFrom, SelectingBookingTimeBlockFromTitle, SelectingBookingTime, BookedTime, BookedTimeItem, BookingTimeItemBackground, BookingTimeItemContent, BookingTimeItemContentText, SelectTimeTitle, SelectDataContainer, SelectDataOption } from './ModalStyles';
import Calendar from '../calendar/calendar';
import useCalendar from '../../hooks/useCalendar';
export default function ModalWindow({ open, onClose, clickedElement, clickedDay, month, year }) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  const {handleBook, handleTime, oneUser, isError, currentDate, errorMessage} = GetTableInfo({clickedElement, onClose, month, year, clickedDay})
  const  {handleDecrement, handleIncrement, handleSelectDay, daysInMonth }= useCalendar()
  return ReactDom.createPortal(
    <>
      <Modal>
        <ModalWrapper>
          <HeaderWrapper>
            <ModalTitle>
              Table № {clickedElement}   {clickedDay}-{month}-{year}
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
              <SelectingBookingTime onChange={(event) => handleTime(event)} name="from" placeholder='From 00:00' />
            </SelectBookingTimeBlockFrom>
            <SelectBookingTimeBlockFrom>
              <SelectingBookingTimeBlockFromTitle> To</SelectingBookingTimeBlockFromTitle>
              <SelectingBookingTime onChange={(event) => handleTime(event)} name="to" placeholder='To 00:00' />
            </SelectBookingTimeBlockFrom>
          </SelectBookingTimeBlock>
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
                  {/*    <BookingTimeItemContentText>
                  {item.amountOfChairs}/{oneUser.getTableInfo.amountOfChairs} chairs 
                </BookingTimeItemContentText> */}
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
        </ModalWrapper>
      </Modal>
      <OverlayStyles />
    </>,
    portalElement || document.body
  );
}  

/*
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import { OverlayStyles, ErrorTime, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage, ModalTitle, HeaderWrapper, ModalData, GridWrapper, GridTable, GridTableElement, SelectDataTitle, SelectBookingTimeBlock, SelectBookingTimeBlockFrom, SelectingBookingTimeBlockFromTitle, SelectingBookingTime, BookedTime, BookedTimeItem, BookingTimeItemBackground, BookingTimeItemContent, BookingTimeItemContentText, SelectTimeTitle, SelectDataContainer, SelectDataOption } from './ModalStyles';
import Calendar from '../calendar/calendar';
import useCalendar from '../../hooks/useCalendar';

export default function ModalWindow({ open, onClose, clickedElement }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Проверяем, произошел ли клик вне области модального окна
      if (open && !event.target.closest('#ModalWrapper')) {
      //  onClose();
      console.log("OUT")
      }
    };

    // Добавляем слушатель события клика при открытом модальном окне
    if (open) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Удаляем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open, onClose]);

  if (!open) return null;
  
  const portalElement = document.getElementById('portal');
  const { month, year, clickedDay, handleDecrement, handleIncrement, handleSelectDay, daysInMonth } = useCalendar();
  const { handleBook, handleTime, oneUser, isError, currentDate, errorMessage } = GetTableInfo({ clickedElement, onClose, month, year, clickedDay });

  return ReactDOM.createPortal(
    <>
      <Modal id="ModalWrapper">
        <ModalWrapper>
          <HeaderWrapper>
            <ModalTitle>
              Table № {clickedElement}
            </ModalTitle>
            <ModalData>
              {currentDate}
            </ModalData>
          </HeaderWrapper>
          <SelectDataTitle>
            Select data for booking
          </SelectDataTitle>
          <Calendar month={month} year={year} clickedDay={clickedDay} handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleSelectDay={handleSelectDay} daysInMonth={daysInMonth} />
          <SelectDataContainer>
            <SelectTimeTitle>
              Select time booking 
            </SelectTimeTitle>
            <SelectDataOption>
              Enter desired time
            </SelectDataOption>
            <SelectDataOption>
              Book by hours
            </SelectDataOption>
          </SelectDataContainer>
          <SelectBookingTimeBlock>
            <SelectBookingTimeBlockFrom>
              <SelectingBookingTimeBlockFromTitle> From</SelectingBookingTimeBlockFromTitle>
              <SelectingBookingTime onChange={(event) => handleTime(event)} name="from" placeholder='From 00:00' />
            </SelectBookingTimeBlockFrom>
            <SelectBookingTimeBlockFrom>
              <SelectingBookingTimeBlockFromTitle> To</SelectingBookingTimeBlockFromTitle>
              <SelectingBookingTime onChange={(event) => handleTime(event)} name="to" placeholder='To 00:00' />
            </SelectBookingTimeBlockFrom>
          </SelectBookingTimeBlock>
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
                  <BookedTimeItem key={item.from + item.to}>
                    <BookingTimeItemContent>
                      <BookingTimeItemContentText>
                        {item.from}-{item.to}
                      </BookingTimeItemContentText>
                      <BookingTimeItemContentText>
                        {item.amountOfChairs}/{oneUser.getTableInfo.amountOfChairs} chairs 
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
        </ModalWrapper>
      </Modal>
      <OverlayStyles />
    </>,
    portalElement || document.body
  );
}
 */