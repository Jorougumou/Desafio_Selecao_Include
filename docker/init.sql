--
-- PostgreSQL database dump
--

-- Dumped from database version 16.15
-- Dumped by pg_dump version 16.14

-- Started on 2026-09-08 17:35:31 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 40985)
-- Name: servico; Type: TABLE; Schema: public; Owner: vini
--

CREATE TABLE public.servico (
    id bigint NOT NULL,
    cliente character varying(150) NOT NULL,
    data_inicio date NOT NULL,
    data_fim date NOT NULL,
    id_v bigint NOT NULL
);


ALTER TABLE public.servico OWNER TO vini;

--
-- TOC entry 217 (class 1259 OID 40984)
-- Name: servico_id_seq; Type: SEQUENCE; Schema: public; Owner: vini
--

CREATE SEQUENCE public.servico_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.servico_id_seq OWNER TO vini;

--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 217
-- Name: servico_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vini
--

ALTER SEQUENCE public.servico_id_seq OWNED BY public.servico.id;


--
-- TOC entry 216 (class 1259 OID 40977)
-- Name: veiculos; Type: TABLE; Schema: public; Owner: vini
--

CREATE TABLE public.veiculos (
    id bigint NOT NULL,
    marca character varying(60) NOT NULL,
    modelo character varying(100) NOT NULL,
    ano integer NOT NULL,
    placa character varying(20) NOT NULL,
    valor_diaria double precision NOT NULL,
    disponibilidade boolean DEFAULT true
);


ALTER TABLE public.veiculos OWNER TO vini;

--
-- TOC entry 215 (class 1259 OID 40976)
-- Name: veiculos_id_seq; Type: SEQUENCE; Schema: public; Owner: vini
--

CREATE SEQUENCE public.veiculos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.veiculos_id_seq OWNER TO vini;

--
-- TOC entry 3467 (class 0 OID 0)
-- Dependencies: 215
-- Name: veiculos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vini
--

ALTER SEQUENCE public.veiculos_id_seq OWNED BY public.veiculos.id;


--
-- TOC entry 3308 (class 2604 OID 40988)
-- Name: servico id; Type: DEFAULT; Schema: public; Owner: vini
--

ALTER TABLE ONLY public.servico ALTER COLUMN id SET DEFAULT nextval('public.servico_id_seq'::regclass);


--
-- TOC entry 3306 (class 2604 OID 40980)
-- Name: veiculos id; Type: DEFAULT; Schema: public; Owner: vini
--

ALTER TABLE ONLY public.veiculos ALTER COLUMN id SET DEFAULT nextval('public.veiculos_id_seq'::regclass);


--
-- TOC entry 3460 (class 0 OID 40985)
-- Dependencies: 218
-- Data for Name: servico; Type: TABLE DATA; Schema: public; Owner: vini
--

COPY public.servico (id, cliente, data_inicio, data_fim, id_v) FROM stdin;
2	Vinícius Silva	2026-09-07	2026-09-14	2
\.


--
-- TOC entry 3458 (class 0 OID 40977)
-- Dependencies: 216
-- Data for Name: veiculos; Type: TABLE DATA; Schema: public; Owner: vini
--

COPY public.veiculos (id, marca, modelo, ano, placa, valor_diaria, disponibilidade) FROM stdin;
2	Fiat	Uno 2020	ABC1D23	120	f
\.


--
-- TOC entry 3468 (class 0 OID 0)
-- Dependencies: 217
-- Name: servico_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vini
--

SELECT pg_catalog.setval('public.servico_id_seq', 2, true);


--
-- TOC entry 3469 (class 0 OID 0)
-- Dependencies: 215
-- Name: veiculos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vini
--

SELECT pg_catalog.setval('public.veiculos_id_seq', 2, true);


--
-- TOC entry 3312 (class 2606 OID 40990)
-- Name: servico servico_pkey; Type: CONSTRAINT; Schema: public; Owner: vini
--

ALTER TABLE ONLY public.servico
    ADD CONSTRAINT servico_pkey PRIMARY KEY (id);


--
-- TOC entry 3310 (class 2606 OID 40983)
-- Name: veiculos veiculos_pkey; Type: CONSTRAINT; Schema: public; Owner: vini
--

ALTER TABLE ONLY public.veiculos
    ADD CONSTRAINT veiculos_pkey PRIMARY KEY (id);


--
-- TOC entry 3313 (class 2606 OID 40991)
-- Name: servico fk_veiculo; Type: FK CONSTRAINT; Schema: public; Owner: vini
--

ALTER TABLE ONLY public.servico
    ADD CONSTRAINT fk_veiculo FOREIGN KEY (id_v) REFERENCES public.veiculos(id) ON DELETE CASCADE;


-- Completed on 2026-09-08 17:35:32 UTC

--
-- PostgreSQL database dump complete
--