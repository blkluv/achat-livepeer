import React, { useState, useEffect, useRef, useCallback } from "react";
import { DropdownButton, Dropdown, Alert, InputGroup, Row, Col, Form, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useIpfs } from "./hooks/useIpfs";

export default function ChatCore() {
  // ...all other state variables and functions

  useEffect(() => {
    if (messages.length > 0) {
      const flag = roomData.some((item) => {
        if (item.room === activeTopic) {
          item.data = messages;
          return true;
        }
        return false;
      });

      if (flag) {
        const rmdata = {
          room: activeTopic,
          data: messages,
        };
        setRoomData([...roomData, rmdata]);
      } else {
        handleRoomData();
      }
    }
  }, [messages, roomData, activeTopic, handleRoomData]);

  useEffect(() => {
    if (account) {
      localStorage.setItem(account + "room", JSON.stringify(roomData));
    }
  }, [roomData, account]);

  const isURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleReceiveMessage = useCallback(
    (data) => {
      const message = JSON.parse(data.toString());
      setMessages((messages) => [...messages, message]);
    },
    [setMessages]
  );

  useEffect(() => {
    if (ipfs && ipfsReady) {
      ipfs.pubsub.subscribe(activeTopic, handleReceiveMessage);
      return () => {
        ipfs.pubsub.unsubscribe(activeTopic, handleReceiveMessage);
      };
    }
  }, [ipfs, ipfsReady, activeTopic, handleReceiveMessage]);

  // ...all other components and JSX return

  return (
    <>
      {/* ...all other components */}
      <div className="input-group">
        <Container className="chat-box-container">
          {/* ...all other components */}
          <Row className="message-container">
            <Col className="message-list">
              {messages &&
                messages.map((message) => (
                  <div
                    key={message.timestamp}
                    className={`message ${
                      message.sender === "user" ? "sent" : "received"
                    }`}
                  >
                    <span className="message-text">
                      {isURL(message.text) ? (
                        <a
                          style={{ color: "white" }}
                          href={message.text}
                          rel="noreferrer"
                          target="_blank"
                          alt="lnk"
                        >
                          {message.text}
                        </a>
                      ) : (
                        message.text
                      )}
                      <img
                        style={{
                          width: 15,
                          height: 15,
                          marginLeft: 3,
                          marginTop: 10,
                        }}
                        src="/images/double-tick.png"
                        alt="double tick"
                      ></img>
                    </span>

                    <div
                      style={{ fontSize: 13 }}
                      className="align-self-end small text-muted"
                    >
                      {getTimeData(message.timestamp)}
                    </div>
                  </div>
                ))}
            </Col>
          </Row>
        </Container>
      </div>
      {/* ...all other components */}
    </>
  );
}
