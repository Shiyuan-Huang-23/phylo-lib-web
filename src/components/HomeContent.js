import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Divider, Layout } from 'antd';
import { ArrowDownOutlined, SelectOutlined } from '@ant-design/icons';
import '../App.css';
import HoverVocab from './HoverVocab';
import small_flu from '../ocaml_src/Examples/small_influenza.js';
import hominids from '../ocaml_src/Examples/hominids.js';
import mitochondria from '../ocaml_src/Examples/mitochondria.js';

const { Content } = Layout;

export default function HomeContents() {
  return (
    <div className="wrapper">
      <Content justify="center">
        <div className="home">
          <Row className="intro" justify="center">
            <div>
              <h1>Welcome to PhyloML</h1>
              <h2>
                A phylogenetic library written in OCaml.{'  '}
                <span
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                  }}
                >
                  <a
                    href="https://github.com/VF-S/phyloML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SelectOutlined rotate={90} />
                  </a>
                </span>
              </h2>
              <h2>
                Inferring Evolutionary History through Modern Genetic
                Similarity.
              </h2>
            </div>
          </Row>
          <Row justify="center" gutter={[16, 40]}>
            <Col lg={7} md={10} sm={12}>
              <Link className="offset" to="/pairwise">
                Visualize Pairwise DNA Alignments
              </Link>
            </Col>
            <Col lg={7} md={10} sm={12}>
              <Link className="offset" to="/visualize">
                Visualize Phylogenetic Trees
              </Link>
            </Col>
            <Col lg={7} md={10} sm={12}>
              <Link className="offset" to="/generate">
                Generate Phylogenetic Trees
              </Link>
            </Col>
          </Row>
          <Row className="horizontally-centered home-down">
            <a href="#explanation">
              <Button
                shape="circle"
                icon={<ArrowDownOutlined />}
                size="large"
                style={{
                  backgroundColor: '#f1f9f6',
                  borderColor: '#44967a',
                  color: '#000000',
                  borderWidth: '1.5pt',
                }}
              ></Button>
            </a>
          </Row>
        </div>
        <div className="explanation">
          <Row justify="center">
            <Divider id="explanation" />
            <h1> Explanations and Examples </h1>
          </Row>
          <Row>
            <h2> About Phylogenetic Trees: </h2>
            <h3>
              {' '}
              Scientists often wish to infer the evolutionary history between
              different organisms. Historically, in order to determine the
              closeness of species such as birds or fish, the similarity in
              physical characteristics was analyzed. With the advent of modern
              computers and DNA analysis, the field has moved towards using DNA
              similarity. Two species with more similar DNA are assumed to be
              more closely related. By analyzing these similarities and
              differences in the DNA, we can generate a hypothetical
              evolutionary tree, called a{' '}
              <HoverVocab
                content={
                  <p>
                    A tree that displays the evolutionary relationships between
                    various organisms.
                  </p>
                }
                vocab="phylogenetic tree"
                link="https://www.khanacademy.org/science/high-school-biology/hs-evolution/hs-phylogeny/a/phylogenetic-trees"
                linkText="Khan Academy"
              />
              , that estimates what the historical evolutionary tree would have
              looked like.
            </h3>

            <h2> Functionality: </h2>

            <h3>
              <b> Visualize Pairwise Alignment: </b>
              At the heart of constructing phylogenetic trees is sequence
              alignment, where gaps are inserted in the sequences to make them
              all of equal length, to get a similarity score. Only once the
              alignment scores of all DNA sequences with one another is known is
              it possible to determine genetic similarity and through that,
              evolutionary history.<br></br>
              One such method is the pairwise alignment, where two DNA sequences
              are aligned. It is performed using the Needleman-Wunsch algorithm,
              a globally optimal dynamic programming algorithm that computes a
              loss for the most optimal alignment. Here{' '}
              <span className="highlight">*</span> represents a DNA base pair
              match, <span className="highlight">_</span> a gap, often used if a
              DNA sequence is shorter than the other, and{' '}
              <span className="highlight">|</span> a mismatch.
            </h3>
            <Divider />
            <h3>
              Example of pairwise alignment of mitochondrial genome of Homo
              sapiens sapiens and Homo sapiens neanderthalensis. Sequences
              obtained from the National Center for Biotechnology Information
              (NCBI).
            </h3>
            <Row justify="center" className="centered-content">
              <div
                className="ascii-example-container"
                id="pairwise-example-container"
              >
                <p className="ascii-phylo">{mitochondria}</p>
              </div>
            </Row>
            <br></br>
            <h3>
              <b> Visualize Phylogenetic Trees: </b>
              When a phylogenetic tree has already been constructed, whether
              through this program or other commercially available software, it
              is important that the user can visualize the final alignment. Here
              we built a tokenizer, lexer, and parser to read PhyloXML, an
              extension of the popular XML format designed to encode
              phylogenetic trees.
            </h3>
            <Divider />
            <h3>
              Example of phylogenetic tree of select hominids constructed using
              a PhyloXML file based on the one from{' '}
              <a
                href="http://phyloxml.org/archaeopteryx-js/phyloxml_trees/multiple_support.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                phyloxml.org
              </a>
              .
            </h3>
            <Row justify="center" className="centered-content">
              <div className="ascii-example-container">
                <p className="ascii-phylo">{hominids}</p>
              </div>
            </Row>
            <br />
            <br />
            <h3>
              <b> Generate Phylogenetic Trees: </b>
              We construct phylogenetic genetic trees from DNA sequences encoded
              in a standard .FASTA format using two algorithms: Unweighted Pair
              Group Method with Arithmetic Mean (UPGMA) and Bayesian Inference,
              each with their respective tradeoffs regarding speed and accuracy.
              Each algorithm reads in the .FASTA files, constructs pairwise
              alignments, and then uses respective techniques to find an optimal
              rooted tree.<br></br>
              The first step in{' '}
              <HoverVocab
                vocab="UPGMA"
                link="https://en.wikipedia.org/wiki/UPGMA"
                linkText="the Wikipedia page"
              />{' '}
              consists of creating an <i>n</i> by <i>n</i> distance matrix which
              records the{' '}
              <HoverVocab
                vocab="genetic distance"
                link="https://en.wikipedia.org/wiki/Genetic_distance"
                linkText="the Wikipedia page on genetic distance measures"
              />{' '}
              between each pair of sequences in the alignment. Then, the
              algorithm picks 2 sequences with the least distance and combine
              them to form a 'clade' (a branching point in the tree). Then we do
              the same thing with the next two most similar sequences. We keep
              doing this until we are left with one clade - our final
              phylogenetic tree. <br></br>
              The essence of{' '}
              <HoverVocab
                vocab="Bayesian inference"
                link="https://www.sciencemag.org/site/feature/data/1050262.pdf"
                linkText="a paper on phylogenetic Bayesian inference"
              />{' '}
              is using prior information about the genetic data to predict the
              likelihood that a certain tree is the correct phylogenetic tree,
              given our aligned sequence data. Since finding this likelihood for
              every possible tree structure is computationally intractible, we
              use a technique called{' '}
              <HoverVocab
                vocab="Markov Chain Monte Carlo sampling"
                link="http://pages.stat.wisc.edu/~larget/phylogeny/larget-simon-MBE-1999.pdf"
                linkText="a paper on phylogenetic MCMC methods"
              />{' '}
              to construct a chain of trees and sample from the final tree
              distribution. By this doing this, we can find out the most likely
              phylogenetic tree given our genetic data. The advantage of this
              method is that it can be improved considerably to account for
              various genetic substituion models, based on the existing
              knowledge that we have about the genetic sequences. It is,
              however, less performant than UPGMA.
            </h3>
          </Row>
          <Divider />
          <h3>
            Examples of a phylogenetic tree constructed using influenza virus
            DNA sequences from NCBI.
          </h3>
          <Row justify="center">
            <div className="ascii-example-container">
              <p className="ascii-phylo">{small_flu}</p>
            </div>
          </Row>
        </div>
      </Content>
    </div>
  );
}
