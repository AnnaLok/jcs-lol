import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/views/homePageSectionsStyle.js";

const useStyles = makeStyles(styles);

export default function GospelSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>The Gospel</h2> 
      <h5 className={classes.description}>
        The Gospel is the good news and in one sentence, it is the righteous and perfect creator God sending His one and only Son 
        to die on the cross to pay the debt that we owed so that in Him there is now no condemnation. For those who believe in Him, 
        there is life, hope, and joy eternal in Him alone. 
        <br/>
        If we are honest with ourselves, we know that we’ve messed up in our lives plenty of times: we’ve hurt the people around us, 
        we’ve been selfish, we’ve lied, we’ve cheated, and the list goes on. We are sinners and that’s the testimony of our own lives. 
        The Bible states that God will judge every person according to His own holy and perfect law, and I guarantee you, if you were 
        to sit and watch a recording of your entire life there would be plenty of moments you would not want to watch and see that 
        your life is so far from perfect. 
        <br/>
        The scriptures teach that because of what we have done, we are found guilty: we have sinned and fallen short of the glory of 
        God and that before Him we have no excuse. Since God is just and righteous, meaning that He does all things in a right manner, 
        He cannot let sin be unpunished and the punishment for sin is eternal wrath. 
        <br/>
        If we stopped there then really, we’d all be damned right?  We’re all in serious trouble. But that is not the end of the story. 
        It is at this point, in this reality that we by ourselves are absolutely unable to save ourselves that God shows the riches of 
        His grace, mercy, and love for humanity. The Bible teaches that for God so loved the world that He gave His one and only Son 
        Jesus to die for us on the cross and pay for us the debt that was owed. See God’s justice! He does not leave sin unpunished 
        but rather, His Son steps in our place and dies the death that we deserved! 
        <br/>
        And yet, the story doesn’t end there either! Jesus dies on the cross, is buried, and three days later, He resurrects showing 
        His total and perfect victory over sin and death. The Bible says that whoever should turn to Him and repent from their sins 
        and place their faith in Jesus shall be saved. Jesus invites all who would to trade their weight of sin to come to Him: 
        <br/>
        <br/>
        <a href="https://www.biblegateway.com/passage/?search=Matthew%2011%3A28-30&version=NIV">
        “Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am 
        gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.” - Matthew 11:28-30
        </a>
        <br/>
        <br/>
        Salvation is a completely free gift of God to those who would accept it. There are no amount of good works that will warrant
        your salvation save your coming to Him. We plead to you, turn to Christ today for there is no knowing of when He will return. 
        Please contact us to talk more about the Gospel or if you have any questions whatsoever!
      </h5>
    </div>
  );
}
