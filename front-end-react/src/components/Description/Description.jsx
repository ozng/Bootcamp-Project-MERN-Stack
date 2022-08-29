import "./Description.css";
import { Typography } from "antd";

const { Title, Text } = Typography;

function Description() {
  return (
    <div>
      <Title level={4} className="detail-reservation-description-title">
        Otel Bilgisi
      </Title>
      <Text>
        Lüks bir tatil için ihtiyaç duyduğunuz her şeyi sağlayan Nashira Resort
        Hotel Aqua Spa, Antalya’nın turistik ilçesi Manavgat’ta, Titreyengöl
        beldesinde konumlanıyor. Denize sıfır, özel kum plajlı otel; Antalya
        merkeze yaklaşık 1 saat 20 dakika, Manavgat merkeze ise sadece 15 dakika
        uzaklıkta. Selçuklu saray mimarisi etkisiyle tasarlanmış otelde 11
        yetişkin, 9 çocuk havuzu, 4 jakuzi havuz, 27 kaydıraklı aquapark alanı
        bulunmakta. Aynı zamanda uzun kum sahilinde şezlong, şemsiye, havlu
        servisi de sunuluyor. Tatili sırasında sportif aktivitelerle vakit
        geçirmek isteyenler için otelde 9 tenis kortu, masa tenisi, plaj
        voleybolu, su sporları, oryantiring ve fitness salonu seçenekleri var.
      </Text>
    </div>
  );
}

export default Description;
