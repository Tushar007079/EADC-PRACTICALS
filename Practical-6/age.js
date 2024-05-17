if (msg.payload > 18) {
    msg.payload = "🎉 Congratulations! You are eligible to vote= " + msg.payload + "Years old";
}
else {
    msg.payload = "😞 Sorry, you are not eligible to vote= " + msg.payload + "Years old";
}
return msg;