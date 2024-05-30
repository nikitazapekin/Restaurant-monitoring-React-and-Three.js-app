

/*
import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import styles from "./index.module.scss"

import { OverlayStyles, ErrorTime, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage, ModalTitle, HeaderWrapper, ModalData, GridWrapper, GridTable, GridTableElement, SelectDataTitle, SelectBookingTimeBlock, SelectBookingTimeBlockFrom, SelectingBookingTimeBlockFromTitle, SelectingBookingTime, BookedTime, BookedTimeItem, BookingTimeItemBackground, BookingTimeItemContent, BookingTimeItemContentText, SelectTimeTitle, SelectDataContainer, SelectDataOption, SelectForAllDayTable, ModalSubTitle } from './ModalStyles';
export default function ModalWindow({ open, onClose, clickedElement, clickedDay, month, year }) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  const { handleBook, handleTime, oneUser, isError, currentDate, errorMessage, handleBookTableForDay, time, isConfirm } = GetTableInfo({ clickedElement, onClose, month, year, clickedDay })
  return ReactDom.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modal__inner}>
          <div className={styles.modal__header}>
            <h1 className={styles.modal__title}>
              Table  
              {clickedElement}
           

            {currentDate}
            </h1>
          </div>
          <p className={styles.modal__select}>
            Select time booking
          </p>
          <div className={styles.modal__form}>
            <div className={styles.modal__form__item}>
              <p className={styles.modal__form__title}>
                From
              </p>
              <input type="text" className={styles.modal__form__input} placeholder='09:00-23:00' value={time.from} onChange={(event) => handleTime(event)} name="from" />
            </div>
            <div className={styles.modal__form__item}>
              <p className={styles.modal__form__title}>
                To
              </p>
              <input type="text" className={styles.modal__form__input} placeholder='09:00-23:00' value={time.to} onChange={(event) => handleTime(event)} name="to" />
            </div>
            <p className={styles.modal__or}>
              Or
            </p>
            <button className={styles.modal__bookAllDay}   onClick={handleBookTableForDay}>
              Book all day
            </button>
            {errorMessage && (
                <ErrorTime>
                  {errorMessage}
                </ErrorTime>
              )}
          </div>
          <div className={styles.modal__reserved}>
            <h2 className={styles.modal__reserved__title}>
              Reserved seats
            </h2>

            <div className={styles.modal__reserved__elements}>

            
   {oneUser && oneUser.getTableInfo != undefined && (
                  <>
                  {oneUser.getTableInfo.timeForBooking.map((item => (
                  <p>
                    {item.from} - {item.to}
                  </p>
                
                    )))}
                  </>
                )}
            </div>
          </div>
          <button className={styles.modal__submit}  onClick={handleBook}>
            Submit
          </button>
        </div>
      </div>
  
      <div className={styles.overlay} onClick={() => onClose()}></div>

    </>,
    portalElement || document.body
  );
}
*/













/*


import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import styles from "./index.module.scss"

import { ErrorTime } from './ModalStyles';

export default function ModalWindow({ open, onClose, clickedElement, clickedDay, month, year }) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  const { handleBook, handleTime, oneUser, isError, currentDate, errorMessage, handleBookTableForDay, time, isConfirm } = GetTableInfo({ clickedElement, onClose, month, year, clickedDay })
  const handleOverlayClick = () => {
    console.log('Overlay clicked');
    onClose();
  };
  return ReactDom.createPortal(
    <>
      <div className={styles.modal} // onClick={()=>handleOverlayClick()}
      >
        <div className={styles.modal__inner}>
          <div className={styles.modal__header}>
            <h1 className={styles.modal__title}>
              Table
              {clickedElement}
              {currentDate}
            </h1>
          </div>
          <p className={styles.modal__select}>
            Select time booking
          </p>
          <div className={styles.modal__form}>
            <div className={styles.modal__form__item}>
              <p className={styles.modal__form__title}>
                From
              </p>
              <input type="text" className={styles.modal__form__input} placeholder='09:00-23:00' value={time.from} onChange={(event) => handleTime(event)} name="from" />
            </div>
            <div className={styles.modal__form__item}>
              <p className={styles.modal__form__title}>
                To
              </p>
              <input type="text" className={styles.modal__form__input} placeholder='09:00-23:00' value={time.to} onChange={(event) => handleTime(event)} name="to" />
            </div>
            <p className={styles.modal__or}>
              Or
            </p>
            <button className={styles.modal__bookAllDay} onClick={handleBookTableForDay}>
              Book all day
            </button>
            {errorMessage && (
              <ErrorTime>
                {errorMessage}
              </ErrorTime>
            )}
          </div>
          <div className={styles.modal__reserved}>
            <h2 className={styles.modal__reserved__title}>
              Reserved seats
            </h2>
            <div className={styles.modal__reserved__elements}>
              {oneUser && oneUser.getTableInfo !== undefined && (
                <>
                  {oneUser.getTableInfo.timeForBooking.map((item) => (

                    <div className={styles.modal__reserved__element}>

                      <p key={`${item.from}-${item.to}`}>
                        {item.from} - {item.to}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <button className={styles.modal__submit} onClick={handleBook}

          >
            Submit
          </button>
        </div>
      </div>
      <div className={styles.overlay} onClick={() => handleOverlayClick()}></div>
    </>,
    portalElement || document.body
  );
}


*/





import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import styles from "./index.module.scss"

import { ErrorTime } from './ModalStyles';

export default function ModalWindow({ open, onClose, clickedElement, clickedDay, month, year }) {
  if (!open) return null;
  const portalElement = document.getElementById('portal')
  const { handleBook, handleTime, oneUser, isError, currentDate, errorMessage, handleBookTableForDay, time, isConfirm } = GetTableInfo({ clickedElement, onClose, month, year, clickedDay })

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      console.log('Overlay clicked');
      onClose();
    }
  };

  return ReactDom.createPortal(
    <>
      <div className={styles.modal} onClick={handleOverlayClick}>
        <div className={styles.modal__inner}>
          <div className={styles.modal__header}>
            <h1 className={styles.modal__title}>
              Table {clickedElement} {/*
               {currentDate}
  */}
              {clickedDay}.{month}.{year}
            </h1>
          </div>
          <p className={styles.modal__select}>
            Select time booking
          </p>
          <div className={styles.modal__form}>
            <div className={styles.modal__form__item}>
              <p className={styles.modal__form__title}>
                From
              </p>
              <input type="text" className={styles.modal__form__input} placeholder='09:00-23:00' value={time.from} onChange={(event) => handleTime(event)} name="from" />
            </div>
            <div className={styles.modal__form__item}>
              <p className={styles.modal__form__title}>
                To
              </p>
              <input type="text" className={styles.modal__form__input} placeholder='09:00-23:00' value={time.to} onChange={(event) => handleTime(event)} name="to" />
            </div>
            <p className={styles.modal__or}>
              Or
            </p>
            <button className={styles.modal__bookAllDay} onClick={handleBookTableForDay}>
              Book all day
            </button>
            {errorMessage && (
              <ErrorTime>
                {errorMessage}
              </ErrorTime>
            )}
          </div>
          <div className={styles.modal__reserved}>
            <h2 className={styles.modal__reserved__title}>
              Reserved seats
            </h2>
            <div className={styles.modal__reserved__elements}>
              {oneUser && oneUser.getTableInfo !== undefined && (
                <>
                  {oneUser.getTableInfo.timeForBooking.map((item) => (
                    <div className={styles.modal__reserved__element} key={`${item.from}-${item.to}`}>
                      <p>{item.from} - {item.to}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <button className={styles.modal__submit} onClick={handleBook}>
            Submit
          </button>
        </div>
      </div>
      <div className={styles.overlay} onClick={handleOverlayClick}></div>
    </>,
    portalElement || document.body
  );
}




/*

*/







/*

import ReactDom from 'react-dom';
import GetTableInfo from '../../hooks/getTableInfo';
import { ModalCard, ModalEl, ModalElInner, Overlay } from './ModalStyles';
//import { OverlayStyles, ErrorTime, Modal, ModalWrapper, ModalButton, ModalHeader, ModalTextBlock, ModalHeaderImage, ModalTitle, HeaderWrapper, ModalData, GridWrapper, GridTable, GridTableElement, SelectDataTitle, SelectBookingTimeBlock, SelectBookingTimeBlockFrom, SelectingBookingTimeBlockFromTitle, SelectingBookingTime, BookedTime, BookedTimeItem, BookingTimeItemBackground, BookingTimeItemContent, BookingTimeItemContentText, SelectTimeTitle, SelectDataContainer, SelectDataOption, SelectForAllDayTable, ModalSubTitle } from './ModalStyles';
export default function ModalWindow({ open, onClose, clickedElement, clickedDay, month, year }) {
  // if (!open) return null;
  const portalElement = document.getElementById('portal')
  const { handleBook, handleTime, oneUser, isError, currentDate, errorMessage, handleBookTableForDay, time, isConfirm } = GetTableInfo({ clickedElement, onClose, month, year, clickedDay })

  return ReactDom.createPortal(

    <>

   

        <ModalEl open={open}>
          <ModalElInner>
            <ModalCard open={open}>
              jj
            </ModalCard>
          </ModalElInner>
          <Overlay onClick={() => onClose()} />
        </ModalEl>
    </>,
    portalElement || document.body
  );
}

*/

