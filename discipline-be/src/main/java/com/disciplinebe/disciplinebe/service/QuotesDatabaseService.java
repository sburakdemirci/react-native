package com.disciplinebe.disciplinebe.service;

import com.disciplinebe.disciplinebe.database.entity.QuotesEntity;
import com.disciplinebe.disciplinebe.database.repository.QuotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuotesDatabaseService {

    @Autowired
    QuotesRepository quotesRepository;

    public QuotesEntity findById(int quoteId)
    {
        QuotesEntity quotesEntity= quotesRepository.findById(quoteId);
        return quotesEntity;


    }
}
