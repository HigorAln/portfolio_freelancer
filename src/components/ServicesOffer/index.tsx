import { servicesOfferVariables } from "../../services/servicesOffer";
import { CardServices } from "./CardServices";
import { Content, ContentServices } from "./styles";


export function ServicesOffer(){
  return(
    <ContentServices>
      <Content>
        <h1>The services i offer:</h1>

        <span>
          {servicesOfferVariables.map((service, index) => {
            return(
              <CardServices data={service} key={service.id}/>
            )
          })}
        </span>

      </Content>
    </ContentServices>
  )
}