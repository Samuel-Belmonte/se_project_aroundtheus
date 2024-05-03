!function(){"use strict";class e{constructor(e,t,n){let{name:r,link:i}=e;this._name=r,this._link=i,this._cardSelector=t,this._handleImageClick=n}_setEventListeners(){this._cardElement.querySelector(".card__image").addEventListener("click",(()=>{this._handleImageClick({name:this._name,link:this._link})})),this._cardElement.querySelector(".card__like-button").addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".card__delete-button").addEventListener("click",(()=>{this._handleDeleteCard()}))}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}_handleLikeIcon(){this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button_active")}getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._cardElement.querySelector(".card__image").setAttribute("src",this._link),this._cardElement.querySelector(".card__image").setAttribute("alt",this._name),this._cardElement.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._cardElement}}class t{constructor(e,t){this._formElement=t,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_toggleButtonState(){this._hasInvalidInput()?this.disableButton():this._enableButton()}_hideInputError(e){this._errorMessageEl=this._formElement.querySelector(`#${e.id}-error`),e.classList.remove(this._inputErrorClass),this._errorMessageEl.textContent="",this._errorMessageEl.classList.remove(this._errorClass)}_showInputError(e){this._errorMessageEl=this._formElement.querySelector(`#${e.id}-error`),e.classList.add(this._inputErrorClass),this._errorMessageEl.textContent=e.validationMessage,this._errorMessageEl.classList.add(this._errorClass)}_hasInvalidInput(){return this._inputEls.some((e=>!e.validity.valid))}_enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_setEventListeners(){this._inputEls=[...this._formElement.querySelectorAll(this._inputSelector)],this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputEls.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault(),this.disableButton()})),this._setEventListeners(),this._toggleButtonState()}}const n=document.querySelector("#profile-edit-button"),r=document.querySelector("#profile-edit-modal"),i=document.querySelector("#profile-close-button"),o=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),l=document.querySelector("#profile-title-input"),a=document.querySelector("#profile-description-input"),c=r.querySelector(".modal__form"),u=document.querySelector(".cards__list"),d=document.querySelector(".profile__add-button"),_=document.querySelector("#card-add-modal"),m=document.querySelector("#card-close-button"),h=_.querySelector(".modal__form"),p=h.querySelector(".modal__input_type_title"),E=h.querySelector(".modal__input_type_url"),v=document.querySelector("#preview-image-modal"),S=v.querySelector(".modal__close"),y=document.querySelector(".modal__preview-title"),g=document.querySelector(".modal__preview-image"),b={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"};function f(e){e.classList.add("modal_opened"),document.addEventListener("keydown",C)}function k(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",C)}function q(t,n){const r=function(t){return new e(t,"#card-template",L).getView()}(t);n.prepend(r)}function C(e){"Escape"===e.key&&k(document.querySelector(".modal_opened"))}function L(e){g.src=e.link,g.alt=e.name,y.textContent=e.name,f(v)}new t(b,c).enableValidation(),new t(b,h).enableValidation(),n.addEventListener("click",(()=>{l.value=o.textContent,a.value=s.textContent,f(r)})),i.addEventListener("click",(()=>k(r))),c.addEventListener("submit",(function(e){e.preventDefault(),o.textContent=l.value,s.textContent=a.value,k(r)})),[{name:"Hanging Lake",link:"https://media.cntraveler.com/photos/5bb4f467db225a4f50684c9f/master/w_1920%2Cc_limit/Hanging-Lake-GettyImages-688127462.jpg"},{name:"Oneonta Gorge",link:"https://beautifuloregon.com/wp-content/uploads/2021/03/Oneonta-Gorge-Columbia-River-Gorge-Oregon-102-0142-533.jpg"},{name:"Antelope Canyon",link:"https://detoursamericanwest.com/wp-content/uploads/2023/03/Antelope-Canyon-Tours-from-Phoenix-DETOURS-LP.jpg"},{name:"Kilauea",link:"https://cloudfront-us-east-2.images.arcpublishing.com/reuters/C5PGPXNRNFNP5P4YBQ3EIJNX5I.jpg"},{name:"Mendenhall Ice Caves",link:"https://media.cntraveler.com/photos/65486a46d7063616dabe4e7c/master/w_1920%2Cc_limit/Mendenhall%2520Glacier%2520kyson-dana-i0XNwkEnAWo-unsplash.jpg"},{name:"Niagara Falls",link:"https://www.fodors.com/wp-content/uploads/2020/03/venti-views-mNs_6VmbaiA-unsplash.jpg"}].forEach((e=>{q(e,u)})),d.addEventListener("click",(()=>{f(_)})),m.addEventListener("click",(()=>{k(_)})),h.addEventListener("submit",(function(e){e.preventDefault(),q({name:p.value,link:E.value},u),h.reset(),k(_)})),S.addEventListener("click",(()=>{k(v)})),document.querySelectorAll(".modal").forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.classList.contains("modal")&&k(e)}))}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQWUsTUFBTUEsRUFDbkJDLFdBQUFBLENBQVdDLEVBQWlCQyxFQUFjQyxHQUFrQixJQUFoRCxLQUFFQyxFQUFJLEtBQUVDLEdBQU1KLEVBQ3hCSyxLQUFLQyxNQUFRSCxFQUNiRSxLQUFLRSxNQUFRSCxFQUNiQyxLQUFLRyxjQUFnQlAsRUFDckJJLEtBQUtJLGtCQUFvQlAsQ0FDM0IsQ0FNQVEsa0JBQUFBLEdBQ0VMLEtBQUtNLGFBQ0ZDLGNBQWMsZ0JBQ2RDLGlCQUFpQixTQUFTLEtBQ3pCUixLQUFLSSxrQkFBa0IsQ0FDckJOLEtBQU1FLEtBQUtDLE1BQ1hGLEtBQU1DLEtBQUtFLE9BQ1gsSUFJTkYsS0FBS00sYUFDRkMsY0FBYyxzQkFDZEMsaUJBQWlCLFNBQVMsS0FDekJSLEtBQUtTLGlCQUFpQixJQUkxQlQsS0FBS00sYUFDRkMsY0FBYyx3QkFDZEMsaUJBQWlCLFNBQVMsS0FDekJSLEtBQUtVLG1CQUFtQixHQUU5QixDQU9BQSxpQkFBQUEsR0FDRVYsS0FBS00sYUFBYUssU0FDbEJYLEtBQUtNLGFBQWUsSUFDdEIsQ0FHQUcsZUFBQUEsR0FDRVQsS0FBS00sYUFDRkMsY0FBYyxzQkFDZEssVUFBVUMsT0FBTywyQkFDdEIsQ0FHQUMsT0FBQUEsR0F1QkUsT0F0QkFkLEtBQUtNLGFBQWVTLFNBQ2pCUixjQUFjUCxLQUFLRyxlQUNuQmEsUUFBUVQsY0FBYyxTQUN0QlUsV0FBVSxHQUdiakIsS0FBS00sYUFDRkMsY0FBYyxnQkFDZFcsYUFBYSxNQUFPbEIsS0FBS0UsT0FHNUJGLEtBQUtNLGFBQ0ZDLGNBQWMsZ0JBQ2RXLGFBQWEsTUFBT2xCLEtBQUtDLE9BRzVCRCxLQUFLTSxhQUFhQyxjQUFjLGdCQUFnQlksWUFBY25CLEtBQUtDLE1BR25FRCxLQUFLSyxxQkFHRUwsS0FBS00sWUFDZCxFQy9FYSxNQUFNYyxFQUNuQjFCLFdBQUFBLENBQVkyQixFQUFVQyxHQUNwQnRCLEtBQUt1QixhQUFlRCxFQUVwQnRCLEtBQUt3QixlQUFpQkgsRUFBU0ksY0FDL0J6QixLQUFLMEIsc0JBQXdCTCxFQUFTTSxxQkFDdEMzQixLQUFLNEIscUJBQXVCUCxFQUFTUSxvQkFDckM3QixLQUFLOEIsaUJBQW1CVCxFQUFTVSxnQkFDakMvQixLQUFLZ0MsWUFBY1gsRUFBU1ksVUFDOUIsQ0FNQUMsbUJBQUFBLENBQW9CQyxHQUNiQSxFQUFRQyxTQUFTQyxNQUdwQnJDLEtBQUtzQyxnQkFBZ0JILEdBRnJCbkMsS0FBS3VDLGdCQUFnQkosRUFBU0EsRUFBUUssa0JBSTFDLENBRUFDLGtCQUFBQSxHQUNPekMsS0FBSzBDLG1CQUdSMUMsS0FBSzJDLGdCQUZMM0MsS0FBSzRDLGVBSVQsQ0FFQU4sZUFBQUEsQ0FBZ0JILEdBQ2RuQyxLQUFLNkMsZ0JBQWtCN0MsS0FBS3VCLGFBQWFoQixjQUN0QyxJQUFHNEIsRUFBUVcsWUFFZFgsRUFBUXZCLFVBQVVELE9BQU9YLEtBQUs4QixrQkFDOUI5QixLQUFLNkMsZ0JBQWdCMUIsWUFBYyxHQUNuQ25CLEtBQUs2QyxnQkFBZ0JqQyxVQUFVRCxPQUFPWCxLQUFLZ0MsWUFDN0MsQ0FFQU8sZUFBQUEsQ0FBZ0JKLEdBQ2RuQyxLQUFLNkMsZ0JBQWtCN0MsS0FBS3VCLGFBQWFoQixjQUN0QyxJQUFHNEIsRUFBUVcsWUFFZFgsRUFBUXZCLFVBQVVtQyxJQUFJL0MsS0FBSzhCLGtCQUMzQjlCLEtBQUs2QyxnQkFBZ0IxQixZQUFjZ0IsRUFBUUssa0JBQzNDeEMsS0FBSzZDLGdCQUFnQmpDLFVBQVVtQyxJQUFJL0MsS0FBS2dDLFlBQzFDLENBRUFVLGdCQUFBQSxHQUNFLE9BQU8xQyxLQUFLZ0QsVUFBVUMsTUFBTWQsSUFBYUEsRUFBUUMsU0FBU0MsT0FDNUQsQ0FFQU8sYUFBQUEsR0FDRTVDLEtBQUtrRCxjQUFjdEMsVUFBVUQsT0FBT1gsS0FBSzRCLHNCQUN6QzVCLEtBQUtrRCxjQUFjQyxVQUFXLENBQ2hDLENBRUE5QyxrQkFBQUEsR0FDRUwsS0FBS2dELFVBQVksSUFDWmhELEtBQUt1QixhQUFhNkIsaUJBQWlCcEQsS0FBS3dCLGlCQUU3Q3hCLEtBQUtrRCxjQUFnQmxELEtBQUt1QixhQUFhaEIsY0FDckNQLEtBQUswQix1QkFFUDFCLEtBQUtnRCxVQUFVSyxTQUFTbEIsSUFDdEJBLEVBQVEzQixpQkFBaUIsU0FBVThDLElBQ2pDdEQsS0FBS2tDLG9CQUFvQkMsR0FDekJuQyxLQUFLeUMsb0JBQW9CLEdBQ3pCLEdBRU4sQ0FNQUUsYUFBQUEsR0FDRTNDLEtBQUtrRCxjQUFjdEMsVUFBVW1DLElBQUkvQyxLQUFLNEIsc0JBQ3RDNUIsS0FBS2tELGNBQWNDLFVBQVcsQ0FDaEMsQ0FFQUksZ0JBQUFBLEdBQ0V2RCxLQUFLdUIsYUFBYWYsaUJBQWlCLFVBQVc4QyxJQUM1Q0EsRUFBRUUsaUJBQ0Z4RCxLQUFLMkMsZUFBZSxJQUV0QjNDLEtBQUtLLHFCQUNMTCxLQUFLeUMsb0JBQ1AsRUMzRUYsTUFnQ01nQixFQUFvQjFDLFNBQVNSLGNBQWMsd0JBQzNDbUQsRUFBbUIzQyxTQUFTUixjQUFjLHVCQUMxQ29ELEVBQXFCNUMsU0FBU1IsY0FBYyx5QkFDNUNxRCxFQUFlN0MsU0FBU1IsY0FBYyxtQkFDdENzRCxFQUFxQjlDLFNBQVNSLGNBQWMseUJBQzVDdUQsRUFBb0IvQyxTQUFTUixjQUFjLHdCQUMzQ3dELEVBQTBCaEQsU0FBU1IsY0FDdkMsOEJBRUl5RCxFQUFrQk4sRUFBaUJuRCxjQUFjLGdCQUdqRDBELEVBQWFsRCxTQUFTUixjQUFjLGdCQUNwQzJELEVBQWdCbkQsU0FBU1IsY0FBYyx3QkFDdkM0RCxFQUFlcEQsU0FBU1IsY0FBYyxtQkFDdEM2RCxFQUFxQnJELFNBQVNSLGNBQWMsc0JBQzVDOEQsRUFBY0YsRUFBYTVELGNBQWMsZ0JBQ3pDK0QsRUFBaUJELEVBQVk5RCxjQUFjLDRCQUMzQ2dFLEVBQWVGLEVBQVk5RCxjQUFjLDBCQUd6Q2lFLEVBQW9CekQsU0FBU1IsY0FBYyx3QkFDM0NrRSxFQUNKRCxFQUFrQmpFLGNBQWMsaUJBQzVCbUUsRUFBb0IzRCxTQUFTUixjQUFjLHlCQUMzQ29FLEVBQW1CNUQsU0FBU1IsY0FBYyx5QkFHMUNjLEVBQVcsQ0FDZnVELGFBQWMsZUFDZG5ELGNBQWUsZ0JBQ2ZFLHFCQUFzQixpQkFDdEJFLG9CQUFxQix5QkFDckJFLGdCQUFpQiwwQkFDakJFLFdBQVksd0JBcUJkLFNBQVM0QyxFQUFVQyxHQUNqQkEsRUFBTWxFLFVBQVVtQyxJQUFJLGdCQUNwQmhDLFNBQVNQLGlCQUFpQixVQUFXdUUsRUFDdkMsQ0FHQSxTQUFTQyxFQUFXRixHQUNsQkEsRUFBTWxFLFVBQVVELE9BQU8sZ0JBQ3ZCSSxTQUFTa0Usb0JBQW9CLFVBQVdGLEVBQzFDLENBR0EsU0FBU0csRUFBV0MsRUFBVUMsR0FDNUIsTUFBTUMsRUFuQlIsU0FBd0JGLEdBRXRCLE9BRGdCLElBQUkxRixFQUFLMEYsRUFBVSxpQkFBa0J0RixHQUN0Q2lCLFNBQ2pCLENBZ0JzQndFLENBQWVILEdBQ25DQyxFQUFRRyxRQUFRRixFQUNsQixDQUdBLFNBQVNOLEVBQWdCUyxHQUNQLFdBQVpBLEVBQUlDLEtBRU5ULEVBRGtCakUsU0FBU1IsY0FBYyxpQkFHN0MsQ0FNQSxTQUFTVixFQUFpQnNGLEdBQ3hCUixFQUFpQmUsSUFBTVAsRUFBU3BGLEtBQ2hDNEUsRUFBaUJnQixJQUFNUixFQUFTckYsS0FDaEM0RSxFQUFrQnZELFlBQWNnRSxFQUFTckYsS0FDekMrRSxFQUFVTCxFQUNaLENBbkQ2QixJQUFJcEQsRUFBY0MsRUFBVTJDLEdBQ3BDVCxtQkFFSSxJQUFJbkMsRUFBY0MsRUFBVWdELEdBQ3BDZCxtQkFvRWpCRSxFQUFrQmpELGlCQUFpQixTQUFTLEtBQzFDc0QsRUFBa0I4QixNQUFRaEMsRUFBYXpDLFlBQ3ZDNEMsRUFBd0I2QixNQUFRL0IsRUFBbUIxQyxZQUNuRDBELEVBQVVuQixFQUFpQixJQUc3QkMsRUFBbUJuRCxpQkFBaUIsU0FBUyxJQUMzQ3dFLEVBQVd0QixLQUdiTSxFQUFnQnhELGlCQUFpQixVQTdCakMsU0FBaUM4QyxHQUMvQkEsRUFBRUUsaUJBQ0ZJLEVBQWF6QyxZQUFjMkMsRUFBa0I4QixNQUM3Qy9CLEVBQW1CMUMsWUFBYzRDLEVBQXdCNkIsTUFDekRaLEVBQVd0QixFQUNiLElBaElxQixDQUNuQixDQUNFNUQsS0FBTSxlQUNOQyxLQUFNLCtIQUVSLENBQ0VELEtBQU0sZ0JBQ05DLEtBQU0scUhBRVIsQ0FDRUQsS0FBTSxrQkFDTkMsS0FBTSxnSEFFUixDQUNFRCxLQUFNLFVBQ05DLEtBQU0sZ0dBRVIsQ0FDRUQsS0FBTSx1QkFDTkMsS0FBTSx1SkFFUixDQUNFRCxLQUFNLGdCQUNOQyxLQUFNLDJGQW1JR3NELFNBQVM4QixJQUNwQkQsRUFBV0MsRUFBVWxCLEVBQVcsSUFJbENDLEVBQWMxRCxpQkFBaUIsU0FBUyxLQUN0Q3FFLEVBQVVWLEVBQWEsSUFJekJDLEVBQW1CNUQsaUJBQWlCLFNBQVMsS0FDM0N3RSxFQUFXYixFQUFhLElBRzFCRSxFQUFZN0QsaUJBQWlCLFVBdEM3QixTQUFpQzhDLEdBQy9CQSxFQUFFRSxpQkFHRjBCLEVBQVcsQ0FBRXBGLEtBRkF3RSxFQUFlc0IsTUFFVDdGLEtBRE53RSxFQUFhcUIsT0FDQzNCLEdBQzNCSSxFQUFZd0IsUUFDWmIsRUFBV2IsRUFDYixJQWtDQU0sRUFBd0JqRSxpQkFBaUIsU0FBUyxLQUNoRHdFLEVBQVdSLEVBQWtCLElBR2hCekQsU0FBU3FDLGlCQUFpQixVQUVsQ0MsU0FBU3lCLElBQ2RBLEVBQU10RSxpQkFBaUIsYUFBY2dGLElBQy9CQSxFQUFJTSxPQUFPbEYsVUFBVW1GLFNBQVMsVUFDaENmLEVBQVdGLEVBQ2IsR0FDQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBsaW5rIH0sIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrID0gaGFuZGxlSW1hZ2VDbGljaztcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50IGxpc3RlbmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2soe1xuICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgICAgbGluazogdGhpcy5fbGluayxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vLmNhcmRfX2xpa2UtYnV0dG9uXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oKTtcbiAgICAgIH0pO1xuXG4gICAgLy8uY2FyZF9fZGVsZXRlLWJ1dHRvblxuICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIC8vZGVsZXRlIGZ1bmN0aW9uXG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8vbGlrZSBmdW5jdGlvblxuICBfaGFuZGxlTGlrZUljb24oKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIC8vZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBjYXJkc1xuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIC8vc2V0IHNyY1xuICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxuICAgICAgLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLl9saW5rKTtcblxuICAgIC8vc2V0IGFsdFxuICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxuICAgICAgLnNldEF0dHJpYnV0ZShcImFsdFwiLCB0aGlzLl9uYW1lKTtcblxuICAgIC8vc2V0IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG5cbiAgICAvL3NldCBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgLy9yZXR1cm4gdGhlIGNhcmRcbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWw7XG5cbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaXZhdGUgTWV0aG9kcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsLCBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICghdGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcbiAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICB9XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbCkge1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZUVsID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHtpbnB1dEVsLmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpIHtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxzLnNvbWUoKGlucHV0RWwpID0+ICFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKTtcbiAgfVxuXG4gIF9lbmFibGVCdXR0b24oKSB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRFbHMgPSBbXG4gICAgICAuLi50aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpLFxuICAgIF07XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9pbnB1dEVscy5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1YmxpYyBNZXRob2RzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgZGlzYWJsZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gIH1cbn1cbiIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XG5cbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcblxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSGFuZ2luZyBMYWtlXCIsXG4gICAgbGluazogXCJodHRwczovL21lZGlhLmNudHJhdmVsZXIuY29tL3Bob3Rvcy81YmI0ZjQ2N2RiMjI1YTRmNTA2ODRjOWYvbWFzdGVyL3dfMTkyMCUyQ2NfbGltaXQvSGFuZ2luZy1MYWtlLUdldHR5SW1hZ2VzLTY4ODEyNzQ2Mi5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT25lb250YSBHb3JnZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9iZWF1dGlmdWxvcmVnb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAzL09uZW9udGEtR29yZ2UtQ29sdW1iaWEtUml2ZXItR29yZ2UtT3JlZ29uLTEwMi0wMTQyLTUzMy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQW50ZWxvcGUgQ2FueW9uXCIsXG4gICAgbGluazogXCJodHRwczovL2RldG91cnNhbWVyaWNhbndlc3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzAzL0FudGVsb3BlLUNhbnlvbi1Ub3Vycy1mcm9tLVBob2VuaXgtREVUT1VSUy1MUC5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2lsYXVlYVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jbG91ZGZyb250LXVzLWVhc3QtMi5pbWFnZXMuYXJjcHVibGlzaGluZy5jb20vcmV1dGVycy9DNVBHUFhOUk5GTlA1UDRZQlEzRUlKTlg1SS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWVuZGVuaGFsbCBJY2UgQ2F2ZXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vbWVkaWEuY250cmF2ZWxlci5jb20vcGhvdG9zLzY1NDg2YTQ2ZDcwNjM2MTZkYWJlNGU3Yy9tYXN0ZXIvd18xOTIwJTJDY19saW1pdC9NZW5kZW5oYWxsJTI1MjBHbGFjaWVyJTI1MjBreXNvbi1kYW5hLWkwWE53a0VuQVdvLXVuc3BsYXNoLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOaWFnYXJhIEZhbGxzXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mb2RvcnMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAzL3ZlbnRpLXZpZXdzLW1Oc182Vm1iYWlBLXVuc3BsYXNoLmpwZ1wiLFxuICB9LFxuXTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vL1Byb2ZpbGUgTW9kYWxcbmNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtYnV0dG9uXCIpO1xuY29uc3QgcHJvZmlsZUVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LW1vZGFsXCIpO1xuY29uc3QgcHJvZmlsZUNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWNsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtdGl0bGUtaW5wdXRcIik7XG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxuKTtcbmNvbnN0IHByb2ZpbGVFZGl0Rm9ybSA9IHByb2ZpbGVFZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcblxuLy9BZGQgQ2FyZCBNb2RhbFxuY29uc3QgY2FyZExpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XG5jb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuY29uc3QgYWRkQ2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLWFkZC1tb2RhbFwiKTtcbmNvbnN0IGFkZENhcmRDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC1jbG9zZS1idXR0b25cIik7XG5jb25zdCBhZGRDYXJkRm9ybSA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuY29uc3QgY2FyZFRpdGxlSW5wdXQgPSBhZGRDYXJkRm9ybS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbnB1dF90eXBlX3RpdGxlXCIpO1xuY29uc3QgY2FyZFVybElucHV0ID0gYWRkQ2FyZEZvcm0ucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW5wdXRfdHlwZV91cmxcIik7XG5cbi8vUHJldmlldyBJbWFnZSBNb2RhbFxuY29uc3QgcHJldmlld0ltYWdlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctaW1hZ2UtbW9kYWxcIik7XG5jb25zdCBwcmV2aWV3SW1hZ2VDbG9zZUJ1dHRvbiA9XG4gIHByZXZpZXdJbWFnZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xuY29uc3QgcHJldmlld0ltYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LXRpdGxlXCIpO1xuY29uc3QgcHJldmlld0ltYWdlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctaW1hZ2VcIik7XG5cbi8vRm9yIFZhbGlkYXRpb24gQ2xhc3NcbmNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbi8vQWRkIFZhbGlkYXRpb24gY2xhc3MgdG8gZm9ybXNcbmNvbnN0IHByb2ZpbGVGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIHByb2ZpbGVFZGl0Rm9ybSk7XG5wcm9maWxlRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbmNvbnN0IGFkZENhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgYWRkQ2FyZEZvcm0pO1xuYWRkQ2FyZFZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdW5jdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLy9DcmVhdGUgYSBuZXcgY2FyZFxuZnVuY3Rpb24gZ2V0Q2FyZEVsZW1lbnQoY2FyZERhdGEpIHtcbiAgY29uc3QgZ2V0Q2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkLXRlbXBsYXRlXCIsIGhhbmRsZUltYWdlQ2xpY2spO1xuICByZXR1cm4gZ2V0Q2FyZC5nZXRWaWV3KCk7XG59XG5cbi8vT3BlbiBtb2RhbFxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlV2l0aEVzY2FwZSk7XG59XG5cbi8vQ2xvc2UgbW9kYWxcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VXaXRoRXNjYXBlKTtcbn1cblxuLy9BZGQgY3JlYXRlZCBjYXJkXG5mdW5jdGlvbiByZW5kZXJDYXJkKGNhcmREYXRhLCB3cmFwcGVyKSB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoY2FyZERhdGEpO1xuICB3cmFwcGVyLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xufVxuXG4vL0Nsb3NlIG1vZGFsIHdpdGggZXNjYXBlIGJ1dHRvblxuZnVuY3Rpb24gY2xvc2VXaXRoRXNjYXBlKGV2dCkge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlbmVkXCIpO1xuICAgIGNsb3NlTW9kYWwob3Blbk1vZGFsKTtcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnQgSGFuZGxlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZ1bmN0aW9uIGhhbmRsZUltYWdlQ2xpY2soY2FyZERhdGEpIHtcbiAgcHJldmlld0ltYWdlQ2FyZC5zcmMgPSBjYXJkRGF0YS5saW5rO1xuICBwcmV2aWV3SW1hZ2VDYXJkLmFsdCA9IGNhcmREYXRhLm5hbWU7XG4gIHByZXZpZXdJbWFnZVRpdGxlLnRleHRDb250ZW50ID0gY2FyZERhdGEubmFtZTtcbiAgb3Blbk1vZGFsKHByZXZpZXdJbWFnZU1vZGFsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2ZpbGVUaXRsZS50ZXh0Q29udGVudCA9IHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlO1xuICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgY2xvc2VNb2RhbChwcm9maWxlRWRpdE1vZGFsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZEZvcm1TdWJtaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWUgPSBjYXJkVGl0bGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgbGluayA9IGNhcmRVcmxJbnB1dC52YWx1ZTtcbiAgcmVuZGVyQ2FyZCh7IG5hbWUsIGxpbmsgfSwgY2FyZExpc3RFbCk7XG4gIGFkZENhcmRGb3JtLnJlc2V0KCk7XG4gIGNsb3NlTW9kYWwoYWRkQ2FyZE1vZGFsKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IExpc3RlbmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xucHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvZmlsZVRpdGxlSW5wdXQudmFsdWUgPSBwcm9maWxlVGl0bGUudGV4dENvbnRlbnQ7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICBvcGVuTW9kYWwocHJvZmlsZUVkaXRNb2RhbCk7XG59KTtcblxucHJvZmlsZUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICBjbG9zZU1vZGFsKHByb2ZpbGVFZGl0TW9kYWwpXG4pO1xuXG5wcm9maWxlRWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVQcm9maWxlRWRpdFN1Ym1pdCk7XG5cbmluaXRpYWxDYXJkcy5mb3JFYWNoKChjYXJkRGF0YSkgPT4ge1xuICByZW5kZXJDYXJkKGNhcmREYXRhLCBjYXJkTGlzdEVsKTtcbn0pO1xuXG4vL2FkZCBuZXcgY2FyZCBidXR0b25cbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGFkZENhcmRNb2RhbCk7XG59KTtcblxuLy9jbG9zZSBjYXJkIGJ1dHRvblxuYWRkQ2FyZENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoYWRkQ2FyZE1vZGFsKTtcbn0pO1xuXG5hZGRDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRGb3JtU3VibWl0KTtcblxuLy9wcmV2aWV3IGltYWdlIG1vZGFsXG5wcmV2aWV3SW1hZ2VDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKHByZXZpZXdJbWFnZU1vZGFsKTtcbn0pO1xuXG5jb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xuXG5tb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikpIHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJfcmVmIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlSW1hZ2VDbGljayIsIm5hbWUiLCJsaW5rIiwidGhpcyIsIl9uYW1lIiwiX2xpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUltYWdlQ2xpY2siLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfY2FyZEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlSWNvbiIsIl9oYW5kbGVEZWxldGVDYXJkIiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0VmlldyIsImRvY3VtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImlucHV0RWwiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJfaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZUJ1dHRvbiIsIl9lbmFibGVCdXR0b24iLCJfZXJyb3JNZXNzYWdlRWwiLCJpZCIsImFkZCIsIl9pbnB1dEVscyIsInNvbWUiLCJfc3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJlbmFibGVWYWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJwcm9maWxlRWRpdEJ1dHRvbiIsInByb2ZpbGVFZGl0TW9kYWwiLCJwcm9maWxlQ2xvc2VCdXR0b24iLCJwcm9maWxlVGl0bGUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJwcm9maWxlVGl0bGVJbnB1dCIsInByb2ZpbGVEZXNjcmlwdGlvbklucHV0IiwicHJvZmlsZUVkaXRGb3JtIiwiY2FyZExpc3RFbCIsImFkZENhcmRCdXR0b24iLCJhZGRDYXJkTW9kYWwiLCJhZGRDYXJkQ2xvc2VCdXR0b24iLCJhZGRDYXJkRm9ybSIsImNhcmRUaXRsZUlucHV0IiwiY2FyZFVybElucHV0IiwicHJldmlld0ltYWdlTW9kYWwiLCJwcmV2aWV3SW1hZ2VDbG9zZUJ1dHRvbiIsInByZXZpZXdJbWFnZVRpdGxlIiwicHJldmlld0ltYWdlQ2FyZCIsImZvcm1TZWxlY3RvciIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwiY2xvc2VXaXRoRXNjYXBlIiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXJDYXJkIiwiY2FyZERhdGEiLCJ3cmFwcGVyIiwiY2FyZEVsZW1lbnQiLCJnZXRDYXJkRWxlbWVudCIsInByZXBlbmQiLCJldnQiLCJrZXkiLCJzcmMiLCJhbHQiLCJ2YWx1ZSIsInJlc2V0IiwidGFyZ2V0IiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9