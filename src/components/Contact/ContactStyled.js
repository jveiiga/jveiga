import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-color: #FFF;
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding-top: 5rem;
  width: 100%;
  background-color: #FFF;
  text-transform: uppercase;
  font-size: 1rem;
  opacity: 0;

  &.animate {
    animation: ${slideInFromLeft} 1.5s forwards;
  }

  @media screen and (min-width: 320px) and (max-width: 753px) {
    text-align: center;
    padding: 1rem 1rem 0 1rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  padding: 2rem 1rem 5rem 1rem;
  scroll-behavior: smooth;
  background-color: #FFF;
  -ms-overflow-style: none; /* IE e Edge */
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  &::before,
  &::after {
    content: '';
  }
  
  scroll-snap-type: x mandatory;

  &.animate .card {
    opacity: 0;
    animation: ${fadeInUp} 1s forwards;
    animation-delay: calc(var(--index) * 0.2s);
  }
`;

export const ContainerFlags = styled.div`
  background-color: #000;
`;

export const FlagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-bottom: 13rem;
  gap: 1rem;

  @media screen and (min-width: 320px) and (max-width: 934px) {
    flex-direction: column;
    align-items: center;
    gap: 8rem;
  }
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 1rem;
  opacity: 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 7.6rem solid transparent;
    border-right: 7.5rem solid transparent;
    border-top: 8.5rem solid rgba(255, 255, 255, 0.1);

    @media screen and (min-width: 320px) and (max-width: 460px) {
      bottom: -8.5rem;
    }
  }

  &.animate-left {
    animation: ${slideInFromLeft} 1s forwards;
    opacity: 1;
  }

  &.animate-center {
    animation: ${slideInFromBottom} 1s forwards;
    opacity: 1;
  }

  &.animate-right {
    animation: ${slideInFromRight} 1s forwards;
    opacity: 1;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    /* bottom: -9rem; */
  }
`;

export const TitleFlags = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  color: #FFF;
  font-size: 1.3rem;
  text-transform: uppercase;
  opacity: 0;

  &.animate {
    animation: ${slideInFromRight} 1.5s forwards;
  }

  @media screen and (min-width: 320px) and (max-width: 753px) {
    text-align: center;
    padding: 2rem 1rem 0 1rem;
  }
`;

export const FlagTitle = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-align: start;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 25rem;
  height: auto;
  margin: 0 1rem;
  padding: 1.5rem;
  border: 1px solid #FFF;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  scroll-snap-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);

  &.rotate {
    animation: ${rotateIn} 1.2s ease-in-out;
  }

  &.active {  
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgb(203, 52, 43);
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    min-width: 100%;
  }
`;


export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid rgb(203, 52, 43);
`;

export const CardTitle = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-align: start;
  font-family: 'Open Sans', sans-serif;
  color: #000;
`;

export const CardPlan = styled.div`
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: rgb(203, 52, 43);
  margin-bottom: 1rem;
  border-radius: 20px;
`;

export const CardDetails = styled.p`
  font-size: 0.9rem;
  text-align: start;
  color: #FFF;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  text-align: start;
  color:rgb(141, 141, 141);
  line-height: 1.4;
  margin-bottom: 1.5rem;
`;

export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin-top: auto;
`;

export const ServiceItemCard = styled.li`
  font-size: 0.9rem;
  color: rgba(20, 19, 19, 0.84);
  font-family: 'Open Sans', sans-serif;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    color: rgb(203, 52, 43);
    margin-right: 0.5rem;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ServiceItemFlag = styled.li`
  font-size: 0.9rem;
  color: #FFF;
  font-family: 'Open Sans', sans-serif;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    color: rgb(203, 52, 43);
    margin-right: 0.5rem;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFF;
`;

export const FormContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 5rem auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0;
  
  &.visible {
    animation: ${fadeIn} 0.8s forwards;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  opacity: 0;
  
  &.left.visible {
    animation: ${slideInFromLeft} 0.8s forwards;
  }
  
  &.right.visible {
    animation: ${slideInFromRight} 0.8s forwards;
  }
  
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  opacity: 0;
  
  &.visible {
    animation: ${fadeInUp} 0.6s forwards;
    animation-delay: 0.2s;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(149, 143, 143, 0.42);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #333333;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgb(203, 52, 43);
    box-shadow: 0 0 8px rgba(255, 107, 107, 0.5);
  }
  
  &::placeholder {
    color: rgba(31, 29, 29, 0.5);
  }
`;

export const SubmitButton = styled.button`
  grid-column: 1 / -1;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgb(203, 52, 43);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
  }
  
  &.visible {
    animation: ${fadeInUp} 0.8s forwards;
    animation-delay: 0.6s;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;