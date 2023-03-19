import React, { useEffect, useState, useRef } from 'react';
import { Client, isSupported } from "@livepeer/webrtmp-sdk";
import { Player } from "@livepeer/react";
import { useKeyContext } from "context/keyHandler";
import styles from './WebPlayer.module.css';

function WebPlayer() {
  // ... (all the previous code)

  return (
    <div className={styles.container}>
      <div className={styles.tv-frame}>
        <div className={styles.player-container}>
          <Player
            title={name}
            key={playerKey}
            playbackId={playbackId ? playbackId : null}
            showPipButton
            showTitle={true}
            poster={streamStatus ? "/images/stream.png" : "/images/cat.png"}
            aspectRatio="16to9"
            controls={{
              autohide: 4000,
            }}
            theme={{
              borderStyles: { containerBorderStyle: "hidden" },
              radii: { containerBorderRadius: "10px" },
            }}
          />
        </div>
        {streamKey && playbackId ? (
          <div className={styles.button-container}>
            <button
              onClick={() => reloadPlayer()}
              className="btn btn-outline-dark"
            >
              Reload
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default WebPlayer;
