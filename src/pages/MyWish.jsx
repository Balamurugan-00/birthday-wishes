import "./MyWish.css";
import FloatingEmojis from "../components/FloatingEmojis";

export default function MyWish() {
  return (
    <>
      <FloatingEmojis />
      <div className="my-wish-container">
      <div className="page-header">
        <h1 className="page-title">Unakaga Seela Varigal<span className="emoji-icon">💌</span></h1>
      </div>

      <div className="wish-letter">
        <div className="letter-content">
          <p className="letter-text">
            <b>Note:</b>Intha page Priya va thaivra vera yaruna pakuringa na, itha mattum padikama mathathula parunga 😅, ithu avalukaga nan eluthurathu, sooo kindly consider my request 🙇.
          </p>
          <br></br><hr></hr>
          <br></br>
          <p className="letter-text">Hi chellowww,</p>
          <p className="letter-text">Happie parthday di pattu mahh, intha birthday wish haa nee crt haa unn time of birth appo tha open aagum, tho ippa padichitu iruka .</p>

          <p className="letter-text">
            Innaiku unn birthday ithu tha nan sonna suprise😅 epdi iruku romba simple haa iruka mathiri iruntha adjust panniko mu konjam cringe haa therinchalum sethu. Unaku ithu pudikum nu namburen di 😊. spelling mistake iruntha mannichidu type pantu thirumba padicha enaku siripu siripa varum neriya olaruven sooo...
          </p>
          <p className="letter-text">
            Birthday baby, neeu nalla day va enjoy pannanum kuda pakathula illanaalum, ennaikum unn kuda tha iruken seriya. Unna vitu engaium poga maaten kutty pota poona maathiri unn kuda vey tha irupen 😁.
          </p>
          <p className="letter-text">
            Its your birthday, nasa manda 😂. Ellarum unaku wish pannuvanga apro yaruna unaku wish panna maranta avanga mela kova padatha venum nu apdi panni iruak maatanga.
          </p>

          <p className="letter-text">
            Unaku intha bday apro pona bday mathiri ella bdayvun unn kuda tha irupen seriya neriya memories create panlam apro ethukum feel pannatha unna khasta paduthuranga nu namma onna irunthu ellathaiun tackle panni oru happie life haa lead pannalam. Enakun nee kedachathu romba periya present unna patharama pathupen seriya ethaium potu manasa kolapikatha di pattu mahh.
          </p>
          <p className="letter-text">
            Enaku nee romba mukiyama persons. Unaku inga oru family yee iruku and future namma ellam sethu unn bday celebrate pannalam athuku apro namma pasanga kuda senthu un bday celeb panlam naa 🤭. 
          </p>

          <p className="letter-text">
            Nan unta kova pattu irukalam, unta sanda potu irukalam but una engaium yarutaium vitu kuduka maaten di. Unna khasta paduthi iruntha sorry mu. I love u mahh 🤗. Unaku khastam varama nan pathukuren di ethu naalum enta sollu seriya 
          </p>
          <p className="letter-text">
            Sonna soltey poven soo, ippothaiku inga itha mudikuren but neriya iurku solla namma pesum pothu neriya soldren di.Enna padika st pannathula irunthu srichitey irunthiya athu mathiri unna eppavum siripoda pathupen.  I Love u baby 💕 & 721 🤭. Soon aniversary vara pothu be happy mahh.
          </p>

          <p className="letter-text">With all my love, now and forever,</p>

          <div className="letter-signature-block">
            <p className="letter-signature">Kutty pota poonai</p>
            <p className="letter-signature-name">~Bala murugan</p>
          </div>

          <div className="letter-footer">
            <span className="date">{new Date("2026-04-20").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
