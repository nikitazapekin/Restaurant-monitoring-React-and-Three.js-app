/*
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


  console.log("ITEMMMMMMMMM" +JSON.stringify(item))
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
 */

/*
import React from 'react';
import ReactDOM from 'react-dom';
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
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();

  console.log("ITEMMMMMMMMM" + JSON.stringify(item));
  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };

  return ReactDOM.createPortal(
    <>
      {!isSuccess ? (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} ({item.current.dataOfBooking})?
              </ModalTitle>
              <ButtonBlock>
                <AgreeButton onClick={handleAgree}>
                  Yes I agree!
                </AgreeButton>
                <DisagreeButton onClick={handleClick}>
                  No I disagree!
                </DisagreeButton>
              </ButtonBlock>
            </ModalWrapper>
          </Modal>
          <OverlayStyles />
        </>
      ) : (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                Congratulations! You have successfully booked this table!
              </ModalTitle>
              <AgreeButton onClick={handleClick}>
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
 */









{/*
import React from 'react';
import ReactDOM from 'react-dom';
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
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();

  console.log("ITEMMMMMMMMM" + JSON.stringify(item));
  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };

  return ReactDOM.createPortal(
    <>
 
 
    {!isSuccess ? (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} ({item.current.dataOfBooking})?
              </ModalTitle>
              <ButtonBlock>
                <AgreeButton onClick={handleAgree}>
                  Yes I agree!
                </AgreeButton>
                <DisagreeButton onClick={handleClick}>
                  No I disagree!
                </DisagreeButton>
                </ButtonBlock>
            </ModalWrapper>
          </Modal>
          <OverlayStyles />
        </>
      ) : (
        <>
        <Modal>
            <ModalWrapper>
              <ModalTitle>
                Congratulations! You have successfully booked this table!
              </ModalTitle>
              <AgreeButton onClick={handleClick}>
                Submit
              </AgreeButton>
            </ModalWrapper>
          </Modal>
          <OverlayStyles />
        </>
        )}
      {item.isHistory && (
        <>
          <Modal>
        <ModalWrapper>
        <ModalTitle>
        historuuuuuuuuuuuuuu
        </ModalTitle>
        <AgreeButton onClick={handleClick}>
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

*/}






/*


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { OverlayStyles, Modal, ModalWrapper, AgreeButton, DisagreeButton, ButtonBlock } from './SureModalStyles';
import { useParams } from 'react-router-dom';
import { ModalTitle } from '../Modal/ModalStyles';
export default function SureModalWindow({ isOpen, setIsOpen, item, handleConfirm }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();

  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };

  return ReactDOM.createPortal(
    <>
      {!isSuccess && !item.isHistory ? (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} ({item.current.dataOfBooking})?
              </ModalTitle>
              <ButtonBlock>
                <AgreeButton onClick={handleAgree}>
                  Yes I agree!
                </AgreeButton>
                <DisagreeButton onClick={handleClick}>
                  No I disagree!
                </DisagreeButton>
              </ButtonBlock>
            </ModalWrapper>
          </Modal>
          <OverlayStyles />
        </>
      ) : !isSuccess && item.isHistory ? (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                historuuuuuuuuuuuuuu
              </ModalTitle>
              <AgreeButton onClick={handleClick}>
                Submit
              </AgreeButton>
            </ModalWrapper>
          </Modal>
          <OverlayStyles />
        </>
      ) : (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                Congratulations! You have successfully booked this table!
              </ModalTitle>
              <AgreeButton onClick={handleClick}>
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
 */









/*
import React from 'react';
import ReactDOM from 'react-dom';
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
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();

  console.log("ITEMMMMMMMMM" + JSON.stringify(item));
  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };

  return ReactDOM.createPortal(
    <>

      {item.isHistory==false && (
<>
        {!isSuccess ? (
      <>
        <Modal>
          <ModalWrapper>
            <ModalTitle>
              Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} ({item.current.dataOfBooking})?
            </ModalTitle>
            <ButtonBlock>
              <AgreeButton onClick={handleAgree}>
                Yes I agree!
              </AgreeButton>
              <DisagreeButton onClick={handleClick}>
                No I disagree!
              </DisagreeButton>
            </ButtonBlock>
          </ModalWrapper>
        </Modal>
        <OverlayStyles />
      </>
      ) : (
      <>
        <Modal>
          <ModalWrapper>
            <ModalTitle>
              Congratulations! You have successfully booked this table!
            </ModalTitle>
            <AgreeButton onClick={handleClick}>
              Submit
            </AgreeButton>
          </ModalWrapper>
        </Modal>
        <OverlayStyles />
      </>
      )}
      </>
      )}
      {item.isHistory && (
        <>
          <Modal>
            <ModalWrapper>
              <ModalTitle>
                historuuuuuuuuuuuuuu
              </ModalTitle>
              <AgreeButton onClick={handleClick}>
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

*/











import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayStyles, Modal, ModalWrapper, AgreeButton, DisagreeButton, ButtonBlock } from './SureModalStyles';
import { useMutation, useQuery } from "@apollo/client";
import Calendar from '../calendar/calendar';
import useCalendar from '../../hooks/useCalendar';
import GetTablesInfo from '../../hooks/getTablesInfo';
import { useEffect } from 'react';
import { useState } from 'react';
import { ModalTitle } from '../Modal/ModalStyles';
import { useParams } from 'react-router-dom';
import useHistoryTables from '../../hooks/useHistoryTables';
import "./index.css"
import styles from "./index.module.scss"
export default function SureModalWindow({ isOpen, setIsOpen, item, handleConfirm }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();
  const { handleReplaceTable, handleRefetchHistory, errMess } = useHistoryTables()
  console.log("ITEMMMMMMMMM" + JSON.stringify(item));
  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };


  const handleRestore = (restoreItem) => {
    setIsSuccess(true);
    handleReplaceTable(restoreItem)
    handleRefetchHistory()
  }
  return ReactDOM.createPortal(
    <>

      {!isSuccess && (
        <>
          {item.current && (
            <>
              {!item.current.isHistory && (
                <div className={styles.modal}>
                  <div className={styles.modal__inner}>
                    <div className={styles.modal__background}>   </div>
                    <h1 className={styles.modal__title}>
                      Congratulations!
                    </h1>
                    <div className={styles.modal__text}>
                      <p className={styles.modal__about}>
                        You have successfully booked
                        this table for
                        {item.current.dataOfBooking}
                        (    {item.current.from} - {item.current.to} )
                        <br />
                        Confirm reservation in your
                        personal account
                      </p>
                    </div>
                    <button className={styles.modal__btn} onClick={handleClick}>
                      Submit
                    </button>
                  </div>
                  <div className={styles.modal__overlay}>

                  </div>
                </div>
              )}

            </>
          )}
        </>
      )}

    </>,
    portalElement || document.body
  );
}
/*
*/



/*
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import {
  OverlayStyles,
  Modal,
  ModalWrapper,
  AgreeButton,
  DisagreeButton,
  ButtonBlock,
} from './SureModalStyles';
import useHistoryTables from '../../hooks/useHistoryTables';
import { ModalTitle } from '../Modal/ModalStyles';
import './index.css';

export default function SureModalWindow({ isOpen, setIsOpen, item, handleConfirm }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();
  const { handleReplaceTable, handleRefetchHistory, errMess } = useHistoryTables();
  console.log("ITEMMMMMMMMM" + JSON.stringify(item));
  
  if (!isOpen) return null;

  const portalElement = document.getElementById('sure');

  const handleClick = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  const handleAgree = () => {
    handleConfirm(item.current);
    setIsSuccess(true);
  };

  const handleRestore = (restoreItem) => {
    setIsSuccess(true);
    handleReplaceTable(restoreItem);
    handleRefetchHistory();
  };

  return ReactDOM.createPortal(
    <>
      {!isSuccess ? (
        <Modal>
          <ModalWrapper>
            {item.current && (
              <>
                {item.current.isHistory ? (
                  <>
                    <ModalTitle>
                      Are you sure to restore booking of table N {item.current.tableID} for {item.current.from} - {item.current.to} ({item.current.dataOfBooking})?
                    </ModalTitle>
                    <ButtonBlock>
                      <AgreeButton onClick={() => handleRestore(item.current)}>
                        Yes, I agree!
                      </AgreeButton>
                      <DisagreeButton onClick={handleClick}>
                        No, I disagree!
                      </DisagreeButton>
                    </ButtonBlock>
                  </>
                ) : (
                  <>
                    <ModalTitle>
                      Are you sure to book table № {item.current.tableID} for {item.current.timeForBooking} ({item.current.dataOfBooking})?
                    </ModalTitle>
                    <ButtonBlock>
                      <AgreeButton onClick={handleAgree}>
                        Yes, I agree!
                      </AgreeButton>
                      <DisagreeButton onClick={handleClick}>
                        No, I disagree!
                      </DisagreeButton>
                    </ButtonBlock>
                  </>
                )}
              </>
            )}
          </ModalWrapper>
          <OverlayStyles />
        </Modal>
      ) : (
        <Modal>
          <ModalWrapper>
            <ModalTitle>
              {errMess && errMess.replaceFromHistory && errMess.replaceFromHistory.errorMessage ? (
                <p>{errMess.replaceFromHistory.errorMessage}</p>
              ) : (
                <p>Congratulations! You have successfully booked this table!</p>
              )}
            </ModalTitle>
            <AgreeButton onClick={handleClick}>
              Submit
            </AgreeButton>
          </ModalWrapper>
          <OverlayStyles />
        </Modal>
      )}
    </>,
    portalElement || document.body
  );
}


*/