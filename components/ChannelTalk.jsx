"use client";
import ChannelService from "../libs/utils";
import React, { useEffect } from "react";

const ChannelTalk = () => {
  useEffect(() => {
    const channelTalk = new ChannelService();
    const { isLoggedIn, uid, name, mobileNumber, email, avatarUrl } = user;
    if (isLoggedIn) {
      channelTalk.boot({
        pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
        memberId: uid,
        profile: {
          name,
          mobileNumber,
          email,
          avatarUrl,
        },
      });
    } else {
      channelTalk.boot({
        pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
      });
    }
    return () => {
      channelTalk.shutdown();
    };
  }, [user]);
  return <div>ChannelTalk</div>;
};

export default ChannelTalk;
